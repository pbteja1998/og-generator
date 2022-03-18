import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { getFormattedDate } from "../utils/format-date";

const getCSS: GetCSSFn = config => {
  return ``;
};

const Component: LayoutComponent = ({ config }) => {
  const title = config.title;
  const author = config.author;
  const authorImage = config.authorImage;
  const logo = config.logo;
  const date = config.date;

  return (
    <>
      {logo && <img className="w-auto h-10" src={logo} alt="" />}

      {date && (
        <p className="mt-16 text-2xl font-semibold text-gray-500">{date}</p>
      )}

      <div className="my-8">
        <svg
          className="w-auto h-4 text-gray-300"
          viewBox="0 0 172 16"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
          />
          <line
            y1="-0.5"
            x2="18.0278"
            y2="-0.5"
            transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
          />
        </svg>
      </div>
      <p className="max-w-2xl text-6xl font-bold tracking-tight text-gray-900">
        {title}
      </p>
      <div className="flex items-center mt-8">
        {authorImage && (
          <img
            className="flex-shrink-0 inline-block mr-5 rounded-full w-14 h-14"
            src={authorImage}
            alt=""
          />
        )}
        {author && (
          <p className="text-3xl font-semibold text-gray-500">
            written by <span>{author}</span>
          </p>
        )}
      </div>
    </>
  );
};

export const featherBlogLayout: ILayout = {
  name: "Feather Blog",
  properties: [
    {
      name: "title",
      type: "text",
      default: "Setting Up TailwindCSS In A React Project",
      placeholder: "Big text",
    },
    {
      name: "author",
      type: "text",
      default: "Floyd Miles",
      placeholder: "Author Name",
    },
    {
      name: "authorImage",
      type: "text",
      default:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      placeholder: "Author Image URL",
    },
    {
      name: "logo",
      type: "text",
      default:
        "https://d33wubrfki0l68.cloudfront.net/bd041a453e81e75ada1030d5498ade1f8e6f78fc/7b60b/images/airtable-logo.png",
      placeholder: "Logo URL",
    },
    {
      name: "date",
      type: "text",
      default: getFormattedDate(new Date().toISOString()),
      placeholder: "Publish Date",
    },
  ],
  getCSS,
  Component,
};
