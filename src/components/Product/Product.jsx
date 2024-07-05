import { FaStar } from 'react-icons/fa6';
import img1 from '../../assets/women/women.png';
import img2 from '../../assets/women/women2.jpg';
import img3 from '../../assets/women/women3.jpg';
import img4 from '../../assets/women/women4.jpg';

function Product() {

        
    
    const productsData=[
        {
            id:1,
            img:img1,
            title:'Women Ethnic',
            rating:5.0,
            color:"white",
            aosDelay:"0"
        },

        {
            id:2,
            img:img2,
            title:'Women western',
            rating:4.5,
            color:"Red",
            aosDelay:"200"
        },

        {
            id:3,
            img:img3,
            title:'Googles',
            rating:4.7,
            color:"brown",
            aosDelay:"400"
        },


        {
            id:4,
            img:img4,
            title:'Printed T-Shirt',
            rating:4.4,
            color:"Yellow",
            aosDelay:"600"
        },


        {
            id:5,
            img:img4,
            title:'Fashion T-Shirt',
            rating:4.5,
            color:"Pink",
            aosDelay:"600"
        },


    
    ]



    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[640px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
                    <h1  data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                    <p  data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro temporibus omnis eos dolorem quam consequatur.</p>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* card-section  */}
                        {productsData.map((data)=>(
                        <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id} className='space-y-3'>
                            <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-400'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                        ))}

 {/* View all button  */}




                    </div>
                </div>
                <div className='flex justify-center'>
    <button className='text-center  mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View all Products </button>
 </div>
            </div>
        </div>
    )
}

export default Product
