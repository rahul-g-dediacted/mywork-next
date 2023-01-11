import Footer from "../components/footer";
import Navbar from "../components/navbar";

// export function SupportPage() {
  export default function SupportPage (){

  return (

    <>

<div className="flex flex-col min-h-screen bg-gray-50 font-sans font-medium">
      <Navbar />
      <main className="flex-1">
      <div className="py-20 text-center">
      <h1 className="text-3xl font-semibold text-gray-700">
        For support please contact us at
      </h1>
      <a
        className="inline-block text-lg text-blue-500 hover:text-blue-400 my-8"
        href="mailto:hello@mywork.sg"
      >
        <p>hello@mywork.sg</p>
      </a>
    </div>
      </main>
      <Footer />
    </div>
    
    </>
  );
}
