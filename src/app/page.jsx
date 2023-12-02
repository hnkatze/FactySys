import { getData } from "@/api/operationsFirebase";


export default async function Home(){
  const data = await getData("Users");
    return(
        <>
        <div>Hola Niggas</div>
        </>
    )
}