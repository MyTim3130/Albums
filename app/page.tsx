import Image from "next/image";
import Album from "./Components/Album";



export default function Home() {
  return (
   <main>
<div className="h-screen w-screen">
    <Album name="Utopia" image="/Utopia.webp" video="https://www.youtube.com/watch?v=tswclcQsFu8"/>
    <Album name="Utopia" image="/Utopia.webp" video="https://www.youtube.com/watch?v=tswclcQsFu8"/>
    <Album name="Utopia" image="/Utopia.webp" video="https://www.youtube.com/watch?v=tswclcQsFu8"/>
    <Album name="Utopia" image="/Utopia.webp" video="https://www.youtube.com/watch?v=tswclcQsFu8"/>
    <Album name="Utopia" image="/Utopia.webp" video="https://www.youtube.com/watch?v=tswclcQsFu8"/>
</div>
   </main>
  );
}
