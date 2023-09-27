import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const CreatePage = async () => {
  const session = await getCurrentUser();
  if (!session?.user) redirect("/");
  return (
    <Modal>
      <h3 className="modal-head-text">Create a new project</h3>
      <ProjectForm type="submit" session={session} />
    </Modal>
  );
};

export default CreatePage;
