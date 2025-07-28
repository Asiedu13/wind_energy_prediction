import Link from "next/link";
import {Turbine} from "@/app/components/turbine";
import {fugazOne} from "@/app/fonts";
import { Info } from "@/app/components/Info";
import { Container } from "@/app/components/Container";
import { Predictor } from "@/app/components/Predictor";
import { Team } from "@/app/components/Team";

export default function Page() {
  return (
   <>
     <Container>
        <div id="home" className="flex w-[100vw] h-[100vh]  items-center justify-center">
            <header className="bg-[#81D8FC]  lg:w-[500px] z-10">
                <h1 className={`${fugazOne.className} italic font-bold text-3xl lg:text-[80px] text-white opacity-[0.7]`}>Wind A.I</h1>
                <p className={'text-[#00B0F0] text-3xl'}>AI-ENABLED TOOL FOR WIND ENERGY PREDICTION
                </p>
                <h2 className={`${fugazOne.className} italic font-bold lg:text-[40px] text-white opacity-[0.7]`}>Agric 3. Group 2</h2>

              {/*   Put nav bars here*/}
              <nav className="text-sm flex gap-4 mt-4 z-20">
                <Link href="#predict" className="border border-2 border-[#00B0F0] text-white font-bold italic hover:opacity-[0.7] p-2 rounded-md cursor-pointer">Predict</Link>
                <Link href={"#info"} className="border border-2 border-[#00B0F0] text-white font-bold italic hover:opacity-[0.7] p-2 rounded-md cursor-pointer">About</Link>
                <Link href={"#team"} className="border border-2 border-[#00B0F0] text-white font-bold italic hover:opacity-[0.7] p-2 rounded-md cursor-pointer">Team</Link>
              </nav>
              </header>
        </div>
          </Container>
        <Turbine/>

      <div id="info" className={'mx-auto px-6 py-12 max-w-3xl z-10'}>
        <Info />
      </div>

     <div>
       <Predictor />
     </div>

     <div>
       <Team />
     </div>
    </>
  );
}
