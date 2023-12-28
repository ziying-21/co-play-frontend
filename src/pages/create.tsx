import CreateStory from "@/components/CreatStory";
import { SetStateAction } from "react";

const CreateStoryPage = () => {
  
  return (
    <CreateStory open={false} setOpen={function (value: SetStateAction<boolean>): void {
      throw new Error("Function not implemented.");
    } } />
  );
};

export default CreateStoryPage;