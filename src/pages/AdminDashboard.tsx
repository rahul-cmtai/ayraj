"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import axios from "axios"

interface GalleryItem {
  id: string
  title: string
  category: Category
  image: {
    name: string
    type: string
    fileId: string
    url: string
  }
  createdOn?: number
  updatedOn?: number
  galleryItemNo?: string
  isActive?: boolean
}

interface ContactForm {
  id: string
  name: string
  email: string
  message: string
  timestamp: string
}

const PREDEFINED_CATEGORIES = [
  "Majestic Door",
  "Prestige Consoles",
  "Aurora Sofas",
  "Divine Kitchens",
  "Carpets",
  "Dinnerware",
  "Wooden Flooring",
  "Tiles",
  "Wallpapers"
] as const;

// Add type for categories
type Category = typeof PREDEFINED_CATEGORIES[number];

interface NewItem {
  title: string;
  category: string;
  isCustomCategory: boolean;
}

// Add environment variables at the top of the file
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD
const API_BASE_URL = import.meta.env.VITE_API_URL
const GALLERY_ENDPOINT = `${API_BASE_URL}/gallery`
const CONTACT_ENDPOINT = `${API_BASE_URL}/contacts`
const LOGIN_ENDPOINT = `${API_BASE_URL}/admin/login`

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState("gallery")
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [contactForms, setContactForms] = useState<ContactForm[]>([])

  // State for adding new item
  const [newItem, setNewItem] = useState<NewItem>({ title: "", category: "", isCustomCategory: false })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  // State for editing item
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null)
  const [updatedNewItem, setUpdatedNewItem] = useState<NewItem>({ title: "", category: "", isCustomCategory: false })
  const [updatedSelectedFile, setUpdatedSelectedFile] = useState<File | null>(null)

  const [loading, setLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(false)

  useEffect(() => {
    // Check for token on mount (to persist login state)
    const token = localStorage.getItem("token")
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    // Fetch data only if authenticated
    if (isAuthenticated) {
      setFetchLoading(true)
      const controller = new AbortController()
      const signal = controller.signal

      const fetchAllData = async () => {
        try {
          await fetchGalleryItems(signal)
          await fetchContactForms(signal)
        } catch (error) {
          console.error("Error fetching all admin data:", error)
        } finally {
          setFetchLoading(false)
        }
      }
      fetchAllData()

      return () => {
        controller.abort()
      }
    }
  }, [isAuthenticated])

  const getAuthHeader = () => {
    const token = localStorage.getItem("token")
    return token ? { Authorization: `Bearer ${token}` } : {}
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem("token", "admin-token")
        setIsAuthenticated(true)
        alert("Login successful!")
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (error: any) {
      console.error("Login error:", error)
      alert("Login failed: Invalid email or password")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsAuthenticated(false)
    setGalleryItems([])
    setContactForms([])
    navigate("/")
  }

  const fetchGalleryItems = async (signal?: AbortSignal) => {
    try {
      const response = await axios.get(GALLERY_ENDPOINT, {
        headers: getAuthHeader(),
        signal,
      })

      console.log("Gallery API Response:", response.data) // Debug log

      // Handle different response structures
      let items = []
      if (response.data.data) {
        items = response.data.data
      } else if (Array.isArray(response.data)) {
        items = response.data
      } else if (response.data.items) {
        items = response.data.items
      }

      // Ensure each item has proper structure
      const processedItems = items.map((item: any) => ({
        id: item.id || item._id,
        title: item.title || "",
        category: item.category || "",
        image: item.image || {
          name: "",
          type: "image",
          fileId: "",
          url: item.imageUrl || item.url || ""
        },
        createdOn: item.createdOn,
        updatedOn: item.updatedOn,
        galleryItemNo: item.galleryItemNo,
        isActive: item.isActive
      }))

      setGalleryItems(Array.isArray(processedItems) ? processedItems : [])
    } catch (error: any) {
      if (!axios.isCancel(error)) {
        console.error("Error fetching gallery items:", error.response ? error.response.data : error.message)
        setGalleryItems([])
      }
    }
  }

  const fetchContactForms = async (signal?: AbortSignal) => {
    try {
      const response = await axios.get(CONTACT_ENDPOINT, {
        headers: getAuthHeader(),
        signal,
      })

      // Handle different response structures
      let forms = []
      if (response.data.data) {
        forms = response.data.data
      } else if (Array.isArray(response.data)) {
        forms = response.data
      }

      setContactForms(Array.isArray(forms) ? forms : [])
    } catch (error: any) {
      if (!axios.isCancel(error)) {
        console.error("Error fetching contact forms:", error.response ? error.response.data : error.message)
        setContactForms([])
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpdatedFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUpdatedSelectedFile(e.target.files[0])
    }
  }

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) {
      alert("Please select an image file.")
      return
    }

    if (!newItem.title.trim() || !newItem.category.trim()) {
      alert("Please fill in both title and category.")
      return
    }

    setLoading(true)
    try {
      const formData = new FormData()
      formData.append("title", newItem.title.trim())
      formData.append("category", newItem.category.trim())
      formData.append("image", selectedFile)

      console.log("Sending FormData:", {
        title: newItem.title,
        category: newItem.category,
        fileName: selectedFile.name,
        fileType: selectedFile.type,
        fileSize: selectedFile.size
      }) // Debug log

      const response = await axios.post(GALLERY_ENDPOINT, formData, {
        headers: {
          ...getAuthHeader(),
          "Content-Type": "multipart/form-data",
        },
      })

      console.log("Add Item Response:", response.data) // Debug log

      // Handle different response structures
      let newItemData
      if (response.data.data) {
        newItemData = response.data.data
      } else if (response.data.item) {
        newItemData = response.data.item
      } else {
        newItemData = response.data
      }

      // Ensure proper structure
      const processedItem = {
        id: newItemData.id || newItemData._id,
        title: newItemData.title || newItem.title,
        category: newItemData.category || newItem.category,
        image: newItemData.image || {
          name: "",
          type: "image",
          fileId: "",
          url: newItemData.imageUrl || newItemData.url || ""
        },
        createdOn: newItemData.createdOn,
        updatedOn: newItemData.updatedOn,
        galleryItemNo: newItemData.galleryItemNo,
        isActive: newItemData.isActive
      }

      setGalleryItems([...galleryItems, processedItem])
      setNewItem({ title: "", category: "", isCustomCategory: false })
      setSelectedFile(null)

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
      if (fileInput) fileInput.value = ""

      alert("Item added successfully!")
    } catch (error: any) {
      console.error("Error adding item:", error.response ? error.response.data : error.message)
      alert("Failed to add item: " + (error.response?.data?.message || error.message))
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteItem = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return

    setLoading(true)
    try {
      await axios.delete(`${GALLERY_ENDPOINT}/${id}`, {
        headers: getAuthHeader(),
      })
      setGalleryItems(galleryItems.filter((item) => item.id !== id))
      alert("Item deleted successfully!")
    } catch (error: any) {
      console.error("Error deleting item:", error.response ? error.response.data : error.message)
      alert("Failed to delete item: " + (error.response?.data?.message || error.message))
    } finally {
      setLoading(false)
    }
  }

  const handleEditClick = (item: GalleryItem) => {
    setEditingItem(item)
    setUpdatedNewItem({ title: item.title, category: item.category, isCustomCategory: false })
    setUpdatedSelectedFile(null)
  }

  const handleUpdateItem = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingItem) return

    if (!updatedNewItem.title.trim() || !updatedNewItem.category.trim()) {
      alert("Please fill in both title and category.")
      return
    }

    setLoading(true)
    try {
      const formData = new FormData()
      formData.append("title", updatedNewItem.title.trim())
      formData.append("category", updatedNewItem.category.trim())
      if (updatedSelectedFile) {
        formData.append("image", updatedSelectedFile)
      }

      const response = await axios.put(`${GALLERY_ENDPOINT}/${editingItem.id}`, formData, {
        headers: {
          ...getAuthHeader(),
          "Content-Type": "multipart/form-data",
        },
      })

      console.log("Update Item Response:", response.data) // Debug log

      // Handle different response structures
      let updatedItemData
      if (response.data.data) {
        updatedItemData = response.data.data
      } else if (response.data.item) {
        updatedItemData = response.data.item
      } else {
        updatedItemData = response.data
      }

      // Ensure proper structure
      const processedItem = {
        id: editingItem.id,
        title: updatedItemData.title || updatedNewItem.title,
        category: updatedItemData.category || updatedNewItem.category,
        image: updatedItemData.image || {
          name: "",
          type: "image",
          fileId: "",
          url: updatedItemData.imageUrl || updatedItemData.url || (editingItem.image ? editingItem.image.url : "")
        },
        createdOn: updatedItemData.createdOn,
        updatedOn: updatedItemData.updatedOn,
        galleryItemNo: updatedItemData.galleryItemNo,
        isActive: updatedItemData.isActive
      }

      setGalleryItems(galleryItems.map((item) => (item.id === editingItem.id ? processedItem : item)))
      setEditingItem(null)
      setUpdatedNewItem({ title: "", category: "", isCustomCategory: false })
      setUpdatedSelectedFile(null)
      alert("Item updated successfully!")
    } catch (error: any) {
      console.error("Error updating item:", {
        itemId: editingItem.id,
        error: error.response ? error.response.data : error.message,
        imageDetails: updatedSelectedFile ? {
          fileName: updatedSelectedFile.name,
          fileType: updatedSelectedFile.type,
          fileSize: updatedSelectedFile.size
        } : null
      })
      alert("Failed to update item: " + (error.response?.data?.message || error.message))
    } finally {
      setLoading(false)
    }
  }

  const handleCancelEdit = () => {
    setEditingItem(null)
    setUpdatedNewItem({ title: "", category: "", isCustomCategory: false })
    setUpdatedSelectedFile(null)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl w-96 border border-purple-100">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Admin Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-purple-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                required
                disabled={loading}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-purple-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 font-medium"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8 pt-20 md:pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2.5 rounded-lg hover:from-rose-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-200"
          >
            Logout
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-purple-100 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 mb-6">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "gallery"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white transform scale-[1.02]"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Gallery Management
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "contacts"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white transform scale-[1.02]"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Contact Forms
            </button>
          </div>

          {fetchLoading ? (
            <div className="text-center text-gray-600 py-20">
              <div className="animate-spin w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p>Loading data...</p>
            </div>
          ) : (
            <>
              {activeTab === "gallery" && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Add New Gallery Item
                  </h3>
                  <form
                    onSubmit={handleAddItem}
                    className="mb-8 p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-purple-100"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Title"
                        value={newItem.title}
                        onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                        className="p-3 border border-purple-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/50 backdrop-blur-sm"
                        required
                        disabled={loading}
                      />
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={newItem.isCustomCategory}
                            onChange={(e) => setNewItem({ ...newItem, isCustomCategory: e.target.checked, category: "" })}
                            className="rounded border-purple-100 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label className="text-sm text-gray-600">Custom Category</label>
                        </div>
                        {newItem.isCustomCategory ? (
                          <input
                            type="text"
                            placeholder="Enter Custom Category"
                            value={newItem.category}
                            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                            className="p-3 border border-purple-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/50 backdrop-blur-sm"
                            required
                            disabled={loading}
                          />
                        ) : (
                          <select
                            value={newItem.category}
                            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                            className="p-3 border border-purple-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/50 backdrop-blur-sm"
                            required
                            disabled={loading}
                          >
                            <option value="">Select Category</option>
                            {PREDEFINED_CATEGORIES.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="p-3 border border-purple-100 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 file:cursor-pointer bg-white/50 backdrop-blur-sm"
                        required
                        disabled={loading}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 font-medium"
                    >
                      {loading ? "Adding..." : "Add Item"}
                    </button>
                  </form>

                  {editingItem && (
                    <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100">
                      <h3 className="text-2xl font-semibold mb-4 text-amber-800">
                        Edit Gallery Item: {editingItem.title}
                      </h3>
                      <form onSubmit={handleUpdateItem}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <input
                            type="text"
                            placeholder="Title"
                            value={updatedNewItem.title}
                            onChange={(e) => setUpdatedNewItem({ ...updatedNewItem, title: e.target.value })}
                            className="p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/50 backdrop-blur-sm"
                            required
                            disabled={loading}
                          />
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={updatedNewItem.isCustomCategory}
                                onChange={(e) => setUpdatedNewItem({ ...updatedNewItem, isCustomCategory: e.target.checked, category: "" })}
                                className="rounded border-amber-200 text-amber-600 focus:ring-amber-500"
                              />
                              <label className="text-sm text-gray-600">Custom Category</label>
                            </div>
                            {updatedNewItem.isCustomCategory ? (
                              <input
                                type="text"
                                placeholder="Enter Custom Category"
                                value={updatedNewItem.category}
                                onChange={(e) => setUpdatedNewItem({ ...updatedNewItem, category: e.target.value })}
                                className="p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/50 backdrop-blur-sm"
                                required
                                disabled={loading}
                              />
                            ) : (
                              <select
                                value={updatedNewItem.category}
                                onChange={(e) => setUpdatedNewItem({ ...updatedNewItem, category: e.target.value })}
                                className="p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/50 backdrop-blur-sm"
                                required
                                disabled={loading}
                              >
                                <option value="">Select Category</option>
                                {PREDEFINED_CATEGORIES.map((category) => (
                                  <option key={category} value={category}>
                                    {category}
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleUpdatedFileChange}
                            className="p-3 border border-amber-200 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-600 file:text-white hover:file:bg-amber-700 file:cursor-pointer bg-white/50 backdrop-blur-sm"
                            disabled={loading}
                          />
                        </div>
                        <div className="flex gap-3 mt-4">
                          <button
                            type="submit"
                            disabled={loading}
                            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-lg hover:from-amber-600 hover:to-yellow-600 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 font-medium"
                          >
                            {loading ? "Updating..." : "Update Item"}
                          </button>
                          <button
                            type="button"
                            onClick={handleCancelEdit}
                            disabled={loading}
                            className="bg-gray-400 text-white px-8 py-3 rounded-lg hover:bg-gray-500 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 font-medium"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Existing Gallery Items
                  </h3>
                  {galleryItems.length === 0 ? (
                    <p className="text-gray-600 text-center py-10">No gallery items found.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {galleryItems.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-100 shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                        >
                          {item.image ? (
                            <img
                              src={item.image.url || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-48 object-cover"
                              onError={(e) => {
                                console.error("Image load error details:", {
                                  imageUrl: item.image.url,
                                  itemId: item.id,
                                  itemTitle: item.title,
                                  galleryItemNo: item.galleryItemNo
                                })
                                ;(e.target as HTMLImageElement).src =
                                  "/placeholder.svg?height=200&width=300&text=Image+Not+Found"
                              }}
                            />
                          ) : (
                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-500">No Image</span>
                            </div>
                          )}
                          <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">{item.title}</h3>
                            <p className="text-purple-600 font-medium">{item.category}</p>
                            <div className="flex gap-3 mt-4">
                              <button
                                onClick={() => handleEditClick(item)}
                                className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                                disabled={loading}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteItem(item.id)}
                                className="text-rose-600 hover:text-rose-800 font-medium transition-colors"
                                disabled={loading}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === "contacts" && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Contact Form Submissions
                  </h3>
                  {contactForms.length === 0 ? (
                    <p className="text-gray-600 text-center py-10">No contact form submissions found.</p>
                  ) : (
                    <div className="overflow-x-auto border border-purple-100 rounded-xl">
                      <table className="min-w-full divide-y divide-purple-100">
                        <thead>
                          <tr className="bg-gradient-to-r from-indigo-50 to-purple-50">
                            <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-900 uppercase tracking-wider">
                              Name
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-900 uppercase tracking-wider">
                              Email
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-900 uppercase tracking-wider">
                              Message
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-900 uppercase tracking-wider">
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-purple-100">
                          {contactForms.map((form) => (
                            <tr key={form.id} className="hover:bg-indigo-50/50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">{form.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-600">{form.email}</td>
                              <td className="px-6 py-4 text-sm text-gray-800 break-words max-w-xs">{form.message}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(form.timestamp).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AdminDashboard
