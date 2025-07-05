import React, { useState } from "react";
import Header from "../../components/header";
import { axiosPublic } from "../../libs/instance";
import UploadIcon from '../../assets/svg/Upload icon.svg'

export const CreateSeries: React.FC = () => {
  const [brandName, setBrandName] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = async () => {
    try {
      if (!brandName || !description || !file) {
        alert("Please fill in all fields and select an image.");
        return;
      }

      const formData = new FormData();
      formData.append('seriesId', brandName);
      formData.append('maxSupply', description);
      formData.append('brandOwner', Date.now().toString());
      formData.append('file', file);

      console.log('Submitting form with:', {
        name: brandName,
        description,
        fileName: file.name,
      });

      const res = await axiosPublic.post('/nft/create', formData);

      console.log('Response:', res.data);
      alert('Brand successfully uploaded!');
    } catch (error: any) {
      console.error('Upload error:', error.response?.data || error.message);
      alert('Upload failed. Check console for details.');
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      const previewUrl = URL.createObjectURL(selected);
      setImagePreview(previewUrl);
    }
  };

    return (
        <div className=" bg-[#EBFBFF] min-h-screen">
            <Header />
            <section className="max-w-7xl mx-auto px-6 py-8 text-purple-700 pt-20">
                <h2 className="text-2xl font-semibold mb-8">Let’s create your SNAP.</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Upload Artwork Section */}
                    <div>
                        <div className="border border-purple-300 rounded-3xl p-6 bg-purple-50 shadow-md">
                            <div className="border border-purple-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center relative">
                                {/* Gambar preview (kalau ada) */}
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-24 h-24 object-cover rounded-full mb-4 shadow"
                                    />
                                ) : (
                                    <img src={UploadIcon} alt="" ></img>
                                )}

                                <p className="font-semibold mb-1 text-purple-700">
                                    {imagePreview ? 'Preview artwork' : 'Drop or upload your artwork here.'}
                                </p>
                                <p className="text-xs text-[#0052FF] mb-6">
                                    PNG, JPEG, GIF, WEBP - Max. 4 MB
                                </p>

                                {/* Input file tersembunyi */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="imageUpload"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />

                                {/* Tombol trigger */}
                                <label
                                    htmlFor="imageUpload"
                                    className="inline-flex cursor-pointer items-center gap-2 bg-purple-500 hover:bg-[#0052FF] active:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-[#0052FF] text-white text-sm font-bold rounded-full px-6 py-3 shadow-[3px_4px_0_rgba(51,38,131,0.8)]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                    {imagePreview ? 'Change' : 'Add'} artwork
                                </label>
                            </div>
                        </div>
                        <p className="mt-3 text-xs text-[#0052FF] flex items-start gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 shrink-0 text-[#0052FF] mt-[2px]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M12 12h.01M12 6h.01"
                                />
                            </svg>
                            <span>
                                <b>Recommended for optimal performance:</b><br />
                                500x500px, rounded shape, less than 200KB<br />
                                Animated pngs are not supported. Use of gif format recommended.
                            </span>
                        </p>
                    </div>

                    {/* Input Fields Section */}
                    <div className="md:col-span-2 space-y-6">
                        {/* POAP title */}
                        <div>
                            <label
                                htmlFor="poap-title"
                                className="block text-sm font-semibold mb-1"
                            >
                                SNAP Title <span className="text-red-600">*</span>
                            </label>
                            <input
                                id="poap-title"
                                type="text"
                                maxLength={150}
                                placeholder="Give your Brand a unique title."
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                                className="w-full border border-purple-300 rounded-md py-2 px-3 text-purple-500 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent"
                            />
                            <div className="text-right text-xs text-purple-500 mt-1">
                                {brandName.length}/150
                            </div>
                        </div>

                        {/* POAP description */}
                        <div>
                            <label
                                htmlFor="poap-description"
                                className="block text-sm font-semibold mb-1"
                            >
                                SNAP description <span className="text-red-600">*</span>
                            </label>
                            <textarea
                                id="poap-description"
                                maxLength={1500}
                                placeholder="Brand Deskription."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full border border-purple-300 rounded-md py-2 px-3 text-purple-500 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent min-h-[120px] resize vertical"
                            ></textarea>
                            <div className="text-right text-xs text-purple-500 mt-1">
                                {description.length}/1500
                            </div>
                        </div>

                        {/* Website */}
                        <section className="bg-[#eafaff]">
                            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Total Quantity */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                                            Total Quantity
                                        </span>
                                        <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Enter the Quantity number (e.g. 1, 2, 3)"
                                        className="w-full border border-purple-300 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                                    />
                                </div>

                                {/* Production Batch */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                                            Production Batch
                                        </span>
                                        <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Enter the batch number (e.g. 1, 2, 3)"
                                        className="w-full border border-purple-300 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Footer with actions */}
                <div className="mt-8 border-t border-purple-200 pt-6 flex justify-end gap-12 items-center">
                    <button
                        type="button"
                        className="text-[#0052FF] font-semibold hover:underline focus:outline-none"
                        onClick={() => {
                            // Cancel action placeholder
                            alert("Cancel clicked");
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="bg-purple-500 hover:bg-[#0052FF] active:bg-purple-700 text-white font-bold rounded-full px-8 py-3 shadow-[3px_4px_0_rgba(51,38,131,0.8)] focus:outline-none"
                    >
                        Create SNAP
                    </button>
                </div>
            </section>
        </div>
    );
};

