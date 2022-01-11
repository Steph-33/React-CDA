const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" className="form-control" />
        </div>
        <div>
          <label htmlFor="message" className="form-label">Message</label>
          <textarea name="message" id="message" className="form-control"></textarea>
        </div>
        <div><input type="submit" value="Envoyer" className="btn btn-info" /></div>
      </form>
    );
}
  
export default Contact;