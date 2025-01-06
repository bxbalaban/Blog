import Link from "next/link";
import { getPagesUnderRoute } from "nextra/context";

import { useRouter } from "nextra/hooks";

export function Blog() {
  return getPagesUnderRoute(`/blogs`).map((page) => {
    console.log(page);

    return (
      <div key={page.route} className="my-8">
        <Link
          href={page.route}
          className="text-black hover:!no-underline dark:text-gray-100"
        >
          {page.meta?.title || page.frontMatter.title || page.name}
        </Link>
        <p className="opacity-80 leading-7">
          {page.frontMatter.description}
          <Link
            href={page.route}
            className="block _text-primary-600 underline underline-offset-2 decoration-from-font"
          >
            Read more →
          </Link>
        </p>
      </div>
    );
  });
}
