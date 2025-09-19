import Contact from "../models/Contact.js";

// Create a new contact
export const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};


