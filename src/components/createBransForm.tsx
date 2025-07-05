import { useRef, useState } from 'react'
import UploadIcon from '../assets/svg/Upload icon.svg'
import { axiosPublic } from '../libs/instance';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

export default function CreateBransForm() {
    const navigate = useNavigate()
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [brandName, setBrandName] = useState("");
    const [description, setDescription] = useState("");

    const { address, isConnected } = useAccount()

    const [logo, setLogo] = useState<File | null>(null)


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string)
            }
            reader.readAsDataURL(file)
            setLogo(file)
        } else {
            setPreviewUrl(null)
            setLogo(null)
        }
    }

    const handleClickBrowse = () => {
        inputRef.current?.click()
    }

    const handleSubmit = async () => {
        try {
            if (!isConnected) {
                alert('Please Connect your wallet first')
            } else if (!brandName || !description || !logo || !address) {
                alert("Please fill in all fields and select an image.");
                return;
            } else {
                const formData = new FormData();
                formData.append('brandName', brandName);
                formData.append('description', description);
                formData.append('registrationDate', Date.now().toString());
                formData.append('logo', logo);
                formData.append('brandOwner', address);
    
                console.log(address)
    
                // console.log('Submitting form with:', {
                //     name: brandName,
                //     description,
                //     fileName: logo.name,
                // });
    
                const res = await axiosPublic.post('brand/create', formData);
                navigate('/')
                console.log('Response:', res.data);
            }
        } catch (error: any) {
            navigate('/')
            console.error('Upload error:', error.response?.data || error.message);
        }
    }

    return (
        <section className="bg-white max-w-xl mx-auto p-6 md:p-10 rounded-xl border-2 border-blue-300 shadow-sm space-y-6 my-6">
            <div>
                <label className="block font-semibold text-sm mb-1 text-[#0052FF]">
                    Brand Name<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                    type="text"
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="Enter your Brand Name..."
                    className="w-full border border-[#0052FF] rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                />
            </div>

            {/* Brand Logo Upload */}
            <div>
                <label className="block font-semibold text-sm mb-1 text-[#0052FF]">
                    Brand Logo<span className="text-red-500 ml-1">*</span>
                </label>
                <div
                    onClick={handleClickBrowse}
                    className="w-full border-2 border-dashed border-[#0052FF] rounded-md p-6 text-center text-sm text-gray-600 cursor-pointer hover:bg-purple-50 transition"
                >
                    {previewUrl ? (
                        <img src={previewUrl} alt="Preview" className="mx-auto max-h-32 object-contain" />
                    ) : (
                        <>
                            <img src={UploadIcon} alt="Upload" className="mx-auto mb-2 w-8 h-8" />
                            <p>
                                Drag & drop your logo or{' '}
                                <span className="text-[#0052FF] font-medium hover:underline">Browse</span>
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Supported formats: JPEG, PNG, PDF – Up to 10 <span className="font-medium">GB</span>
                            </p>
                        </>
                    )}
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/png, image/jpeg, image/jpg, application/pdf"
                        onChange={handleFileChange}
                        hidden
                    />
                </div>
            </div>

            {/* Brand Description */}
            <div>
                <label className="block font-semibold text-sm mb-1 text-[#0052FF]">
                    Brand Description<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell us about your brand, its story, and what makes it unique..."
                    className="w-full border border-[#0052FF] rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                    rows={4}
                />
            </div>

            {/* Wallet Connection */}
            {/* <div className="bg-[#0052FF] border border-[#0052FF] rounded-md p-4 flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-[#0052FF]">Wallet Connection</p>
          <p className="text-xs text-[#0052FF]">Your wallet is connected and ready</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#0052FF] font-mono text-sm">{walletAddress}</span>
          <p>icon</p>
        </div>
      </div> */}

            {/* Submit Button */}
            <div className="text-center pt-2">
                <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-gradient-to-r from-[#0052FF] to-[#0052FF] text-white font-semibold rounded-full shadow hover:opacity-90 transition"
                >
                    Submit for Verification
                </button>
            </div>
        </section>
    )
}
