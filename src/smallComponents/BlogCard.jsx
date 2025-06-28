const BlogCard = ({ title, cover, link, platform, darkMode }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-lg overflow-hidden border shadow-sm transition hover:shadow-lg ${
        darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-black'
      }`}
    >
      <img src={cover} alt={title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs mt-1 opacity-70">{platform}</p>
      </div>
    </a>
  );
  
  export default BlogCard;
  