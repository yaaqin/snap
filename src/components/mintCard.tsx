import { useNavigate, useParams } from "react-router-dom"
import { formatDate } from "../libs/format"
import { useDetailVerify } from "../hooks/query/useDetailVerify"
import { useState } from "react"
import { axiosPublic } from "../libs/instance"
import { mintSeries } from "../utils/contractWriter"

export default function MintCard() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data } = useDetailVerify(id || '')
  const [collector, setCollector] = useState('')

  const handleMint = async () => {
    try {
      const payload = {
        code: id,
        collector: collector
      }
      await axiosPublic.post(`series/mint`, payload)
        .then((res) => {
          console.log(res)
          mintSeries(res.data.collector, res.data.seriesId, JSON.stringify(res.data.uri))
          navigate('/')
        }).catch((err) => {
          console.log(err)
          navigate('/')
        })
    } catch (error) {

    }
  }

  // const [data, setData] = useState<VerifyDetailProps | null>(null)

  // useEffect(() => {
  //   if (!id) return

  //   const fetchData = async () => {
  //     try {
  //       const res = await axiosPublic.get(`/nfts/verify/${id}`)

  //       // validasi manual kalau backend pake { success, data }
  //       if (!res.data?.success) {
  //         throw new Error(res.data?.message || 'Invalid response')
  //       }

  //       setData(res.data)
  //     } catch (err: any) {
  //       console.error(err)
  //     }
  //   }

  //   fetchData()
  // }, [id]) 
  return (
    <>
      {!data ? (
        <p>NFT Tida Ditemukan</p>
      ) : data?.data?.collector ? (
        <div className="flex flex-col justify-between md:flex-row bg-white gap-12 p-6 w-full">
          <section className="flex flex-1  shadow-2xl p-6 rounded-2xl justif-between">
            <div className="flex-shrink-0">
              <img
                className="h-24 md:h-48 w-24 md:w-48 rounded-xl"
                src={data?.data.uri.image}
                alt="Get a Series Logo"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 flex-grow">
              <h1 className="text-2xl font-semibold text-[#0052FF] capitalize">{data?.data?.series_name}</h1>
              <p className="mt-1 text-gray-600">wallet: {data?.data?.wallet}</p>
              <p className="mt-2 text-gray-600">{formatDate(data?.data?.createdAt)}</p>
              <p className="mt-2 text-gray-500">{data?.data?.uri.description}</p>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex flex-col justify-between md:flex-row bg-white gap-12 p-6 w-full">
          <section className="flex flex-1  shadow-2xl p-6 rounded-2xl justif-between">
            <div className="flex-shrink-0">
              <img
                className="h-24 md:h-48 w-24 md:w-48 rounded-xl"
                src={data?.data?.logo}
                alt="Get a Series Logo"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 flex-grow">
              <h1 className="text-2xl font-semibold text-[#0052FF]">{data?.data?.uri.name}</h1>
              <p className="mt-1 text-gray-600">id: {data?.data?.id}</p>
              <p className="mt-2 text-gray-600">{formatDate(data?.data?.createdAt)}</p>
              <p className="mt-2 text-gray-500">{data?.data?.uri.description}</p>
            </div>
          </section>
          <section className="shadow-2xl rounded-2xl p-6">
            <div className="mt-4 md:mt-0">
              <h2 className="text-lg font-semibold">Collect this Series</h2>
              <input
                type="text"
                value={collector}
                onChange={(e) => setCollector(e.target.value)}
                placeholder="Email, ENS or Ethereum address"
                className="border border-gray-300 rounded-md p-2 mt-2 w-full"
              />
              <button onClick={handleMint} className="mt-2 bg-[#0052FF] text-white rounded-md p-2 w-full hover:bg-[#0052FF]">
                Mint now
              </button>
              <p className="mt-2 text-sm text-gray-500">
                Mint for free on <span className="font-semibold">Monad</span>
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  )
}
