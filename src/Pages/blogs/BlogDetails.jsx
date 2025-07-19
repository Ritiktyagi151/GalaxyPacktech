import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import blogs from "./blogs.json";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <Link to="/blogs" className="text-orange-500 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link
          to="/blogs"
          className="text-orange-500 hover:underline flex items-center"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          All Articles
        </Link>
      </div>

      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-96 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-fill"
          />
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block bg-orange-500 text-white px-2 py-1 text-xs rounded mb-2">
                {blog.category}
              </span>
              <h1 className="text-2xl font-bold text-gray-800">{blog.title}</h1>
            </div>
            <div className="text-sm text-gray-500">
              {new Date(blog.date).toLocaleDateString()}
            </div>
          </div>

          <div
            className="prose max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {blog.specifications && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Technical Specifications
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <table className="w-full">
                  <tbody>
                    {Object.entries(blog.specifications).map(([key, value]) => (
                      <tr key={key} className="border-b border-gray-200">
                        <td className="py-2 font-medium text-gray-700">
                          {key}
                        </td>
                        <td className="py-2 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {blog.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {blog.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-orange-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              Written by: <span className="font-medium">{blog.author}</span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
