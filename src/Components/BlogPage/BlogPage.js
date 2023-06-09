const posts = [
  {
    id: 1,
    title: "Cấu trúc cơ bản trong HTML",
    href: "#",
    image: "https://topdev.vn/blog/wp-content/uploads/2020/09/html5.jpg",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "June 1, 2023",
    datetime: "2023-06-1",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Lâm-LT",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219988.png",
    },
  },

  {
    id: 2,
    title: "Tailwind css và cách cài đặt cơ bản",
    href: "#",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*oPL8C-i04sqAUoOS_da9aA.jpeg",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "June 1, 2023",
    datetime: "2023-06-1",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Lâm-LT",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219988.png",
    },
  },

  {
    id: 3,
    title: "TyperScrip là gì, Vì sao nên dùng TyperScript",
    href: "#",
    image:
      "https://blog.haposoft.com/content/images/2022/11/10b88c68-typescript-logo.png",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "June 1, 2023",
    datetime: "2023-06-1",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Lâm-LT",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/219/219988.png",
    },
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Thông tin công nghệ
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <img src={post.image} alt="" />
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
