export default function WorldMap() {
  return (
    <div className="w-full h-full bg-primary-50 flex items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61206785.71241096!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1647856687721!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}