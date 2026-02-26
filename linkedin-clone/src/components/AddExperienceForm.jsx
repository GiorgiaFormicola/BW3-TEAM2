import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExperience, editExperience } from "../redux/actions/experienceActions";
import { Form, Button } from "react-bootstrap";

function AddExperienceForm({ closeModal, existingExperience }) {
  const dispatch = useDispatch();
  // Stato locale del form: inizializzato con i valori dell'esperienza esistente, se presente
  const [formData, setFormData] = useState(() => ({
    role: existingExperience?.role || "",
    company: existingExperience?.company || "",
    startDate: existingExperience?.startDate?.slice(0, 10) || "",
    endDate: existingExperience?.endDate?.slice(0, 10) || "",
    description: existingExperience?.description || "",
    area: existingExperience?.area || "",
  }));
  // Gestione dei cambiamenti nei campi del form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (existingExperience) {
      // Se esiste un'esperienza, la stiamo modificando
      dispatch(editExperience(existingExperience._id, formData));
    } else {
      // Altrimenti aggiungiamo una nuova esperienza
      dispatch(addExperience(formData));
    }

    closeModal();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control className="mb-2" placeholder="Ruolo" name="role" value={formData.role} onChange={handleChange} required />

      <Form.Control className="mb-2" placeholder="Azienda" name="company" value={formData.company} onChange={handleChange} required />

      <Form.Control type="date" className="mb-2" name="startDate" value={formData.startDate} onChange={handleChange} required />

      <Form.Control type="date" className="mb-2" name="endDate" value={formData.endDate} onChange={handleChange} />

      <Form.Control className="mb-2" placeholder="Area" name="area" value={formData.area} onChange={handleChange} />

      <Form.Control as="textarea" className="mb-3" placeholder="Descrizione" name="description" value={formData.description} onChange={handleChange} />

      <Button type="submit">{existingExperience ? "Salva modifiche" : "Aggiungi"}</Button>
    </Form>
  );
}

export default AddExperienceForm;
