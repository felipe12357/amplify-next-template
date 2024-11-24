import { client } from "@/utils/amplify_set_config";
import  MatchListComponent  from "@/components/matchList/matchListComponent";
import { Metadata } from "next";
import CreateMatchComponet from "./components/createMatch";
export const metadata: Metadata = {
  title: "Polla Copa America",
  description: "Estudio admin page con nextJs",
  
};
const AdminPage = async() =>{

    const { data: matchList, errors } = await client.models.Match.list();
    return (<main className="mx-auto w-fit">
          <CreateMatchComponet></CreateMatchComponet>
          <MatchListComponent matchList={matchList}></MatchListComponent>
          
    </main>)

}

export default AdminPage;