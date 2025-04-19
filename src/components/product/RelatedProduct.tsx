// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// const relatedProducts = [
//     {
//       id: 1,
//       name: "Cashmere Turtleneck Sweater",
//       price: 79.99,
//       image:
//         "https://readdy.ai/api/search-image?query=elegant%20cashmere%20turtleneck%20sweater%20in%20beige%20color%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=400&height=500&seq=1&orientation=portrait",
//     },
//     {
//       id: 2,
//       name: "Wool Blend Cardigan",
//       price: 64.99,
//       image:
//         "https://readdy.ai/api/search-image?query=stylish%20wool%20blend%20cardigan%20in%20light%20gray%20color%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=400&height=500&seq=2&orientation=portrait",
//     },
//     {
//       id: 3,
//       name: "Ribbed Cotton Pullover",
//       price: 49.99,
//       image:
//         "https://readdy.ai/api/search-image?query=modern%20ribbed%20cotton%20pullover%20in%20navy%20blue%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=400&height=500&seq=3&orientation=portrait",
//     },
//     {
//       id: 4,
//       name: "Merino Wool Sweater",
//       price: 69.99,
//       image:
//         "https://readdy.ai/api/search-image?query=luxurious%20merino%20wool%20sweater%20in%20dark%20green%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=400&height=500&seq=4&orientation=portrait",
//     },
//   ];
// {/* Related Products */}
// <section className="mt-20">
// <h2 className="text-2xl font-bold text-gray-900 mb-8">
//   You May Also Like
// </h2>
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//   {relatedProducts.map((product) => (
//     <Card
//       key={product.id}
//       className="overflow-hidden group cursor-pointer"
//     >
//       <div className="relative pb-[125%] bg-gray-100 overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <Button className="w-10 h-10 rounded-full bg-white text-gray-900 hover:bg-gray-100 p-0 flex items-center justify-center shadow-md !rounded-button whitespace-nowrap">
//             <i className="fas fa-eye"></i>
//           </Button>
//         </div>
//       </div>
//       <CardContent className="p-4">
//         <h3 className="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
//           {product.name}
//         </h3>
//         <div className="flex items-center justify-between">
//           <span className="font-semibold">
//             ${product.price.toFixed(2)}
//           </span>
//           <div className="flex items-center">
//             <div className="flex">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <i
//                   key={star}
//                   className={`fas fa-star text-xs ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`}
//                 ></i>
//               ))}
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   ))}
// </div>
// </section>