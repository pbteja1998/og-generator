import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { getFormattedDate } from "../utils/format-date";

const getCSS: GetCSSFn = config => {
  return ``;
};

const Component: LayoutComponent = ({ config }) => {
  const count = config.count;
  const logo = config.logo;
  const title = config.title;
  const description = config.description;

  return (
    <>
      {logo && <img className="w-auto h-10" src={logo} alt="" />}
      <div className="flex items-start gap-16 mt-16">
        <div>
          {title && (
            <p className="max-w-2xl text-6xl font-bold tracking-tight text-gray-900">
              {title}
            </p>
          )}
          {description && (
            <p className="max-w-2xl mt-6 text-2xl font-medium leading-relaxed text-gray-500">
              {description}
            </p>
          )}

          <p className="max-w-2xl mt-8 text-2xl font-semibold text-gray-900">
            Total {count} articles written
          </p>
        </div>
        <div>
          <div className="relative" style={{ width: "275px", height: "275px" }}>
            <div
              className="bg-conic-gradient absolute rounded-full rotate-180 opacity-30 blur-lg"
              style={{
                filter: "blur(16px)",
                top: "-0.125rem",
                bottom: "-0.125rem",
                right: "-0.125rem",
                left: "-0.125rem",
              }}
            ></div>
            <div
              className="relative flex-shrink-0 rounded-full inline-flex items-center justify-center bg-gray-200 border-8 border-gray-50"
              style={{ width: "275px", height: "275px" }}
            >
              <svg
                className="w-48 h-48 text-gray-400"
                viewBox="0 0 220 220"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.12"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.3461 112.539C18.333 108.319 18.333 103.834 18.333 94.8661V86.1667C18.333 65.6314 18.333 55.3638 22.3294 47.5203C25.8448 40.6211 31.4541 35.0118 38.3534 31.4964C46.1968 27.5 56.4644 27.5 76.9997 27.5H85.6992C94.6675 27.5 99.1516 27.5 103.372 28.5131C107.113 29.4113 110.689 30.8928 113.97 32.9032C117.67 35.1707 120.841 38.3415 127.183 44.6831L151.016 68.5164C165.537 83.037 172.797 90.2973 175.517 98.6694C177.91 106.034 177.91 113.966 175.517 121.331C172.797 129.703 165.537 136.963 151.016 151.484L142.317 160.183C127.796 174.704 120.536 181.964 112.164 184.684C104.799 187.077 96.8666 187.077 89.5024 184.684C81.1303 181.964 73.87 174.704 59.3494 160.183L35.5161 136.35C29.1745 130.008 26.0037 126.837 23.7362 123.137C21.7258 119.856 20.2443 116.28 19.3461 112.539ZM82.4997 110C92.6249 110 100.833 101.792 100.833 91.6667C100.833 81.5415 92.6249 73.3333 82.4997 73.3333C72.3745 73.3333 64.1663 81.5415 64.1663 91.6667C64.1663 101.792 72.3745 110 82.4997 110Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M137.222 18.0554C139.907 15.3705 144.26 15.3705 146.945 18.0554L151.528 22.6387L161.432 32.5424L161.653 32.7641C174.171 45.2821 183.864 54.9748 190.994 63.3733C198.218 71.8826 203.213 79.5145 205.986 88.047C210.622 102.315 210.622 117.685 205.986 131.953C203.213 140.486 198.218 148.118 190.994 156.627C183.864 165.025 174.171 174.718 161.653 187.236L161.432 187.458L146.945 201.945L142.361 206.528C139.676 209.213 135.323 209.213 132.639 206.528C129.954 203.843 129.954 199.49 132.639 196.805L137.222 192.222L151.709 177.735C164.495 164.949 173.788 155.649 180.512 147.728C187.183 139.869 190.921 133.823 192.909 127.704C196.648 116.198 196.648 103.803 192.909 92.296C190.921 86.1774 187.183 80.131 180.512 72.272C173.788 64.3516 164.495 55.0509 151.709 42.2651L141.805 32.3614L137.222 27.7781C134.537 25.0933 134.537 20.7402 137.222 18.0554ZM82.4999 80.2084C76.1716 80.2084 71.0415 85.3385 71.0415 91.6668C71.0415 97.995 76.1716 103.125 82.4999 103.125C88.8281 103.125 93.9582 97.995 93.9582 91.6668C93.9582 85.3385 88.8281 80.2084 82.4999 80.2084ZM57.2915 91.6668C57.2915 77.7446 68.5777 66.4584 82.4999 66.4584C96.4221 66.4584 107.708 77.7446 107.708 91.6668C107.708 105.589 96.4221 116.875 82.4999 116.875C68.5777 116.875 57.2915 105.589 57.2915 91.6668ZM85.6994 34.3751C94.9949 34.3751 98.5222 34.4193 101.767 35.1982C104.807 35.928 107.713 37.1317 110.378 38.7652C113.223 40.5087 115.749 42.9716 122.322 49.5445L146.155 73.3778C153.495 80.7184 158.705 85.9352 162.451 90.348C166.145 94.6995 168.011 97.8149 168.979 100.794C170.923 106.777 170.923 113.223 168.979 119.206C168.011 122.185 166.145 125.301 162.451 129.652C158.705 134.065 153.495 139.282 146.155 146.622L137.455 155.322C130.115 162.662 124.898 167.872 120.485 171.618C116.134 175.312 113.018 177.178 110.039 178.146C104.056 180.09 97.6105 180.09 91.6271 178.146C88.648 177.178 85.5326 175.312 81.1812 171.618C76.7683 167.872 71.5515 162.662 64.211 155.322L40.3776 131.488C33.8047 124.916 31.3418 122.39 29.5983 119.545C27.9649 116.879 26.7611 113.973 26.0313 110.934C25.2524 107.689 25.2082 104.162 25.2082 94.8662V86.1667C25.2082 75.7857 25.2135 68.4133 25.6849 62.644C26.1497 56.9549 27.0332 53.4326 28.4553 50.6416C31.3115 45.036 35.8691 40.4784 41.4747 37.6222C44.2657 36.2001 47.788 35.3166 53.4771 34.8518C59.2465 34.3804 66.6188 34.3751 76.9999 34.3751H85.6994ZM104.977 21.8281C99.9555 20.6227 94.7045 20.6236 86.5567 20.625L85.6994 20.6251H76.9999L76.6974 20.6251C66.686 20.625 58.7523 20.625 52.3574 21.1475C45.818 21.6818 40.2848 22.7965 35.2324 25.3708C27.0395 29.5453 20.3784 36.2064 16.204 44.3992C13.6296 49.4517 12.5149 54.9849 11.9806 61.5243C11.4581 67.9192 11.4581 75.8529 11.4582 85.8642L11.4582 86.1667V94.8662L11.4581 95.7236C11.4567 103.871 11.4558 109.122 12.6613 114.144C13.7279 118.586 15.4872 122.834 17.8745 126.729C20.5726 131.132 24.2862 134.845 30.0486 140.605L30.6549 141.211L54.4882 165.045L54.7026 165.259C61.7814 172.338 67.3913 177.948 72.2825 182.1C77.2843 186.346 81.9851 189.471 87.3781 191.223C96.1232 194.064 105.543 194.064 114.288 191.223C119.681 189.471 124.382 186.346 129.384 182.1C134.275 177.948 139.885 172.338 146.964 165.259L146.964 165.259L147.178 165.045L155.878 156.345L156.091 156.132C163.17 149.052 168.781 143.442 172.933 138.551C177.179 133.549 180.304 128.848 182.056 123.455C184.897 114.71 184.897 105.29 182.056 96.545C180.304 91.152 177.179 86.4512 172.933 81.4493C168.781 76.5581 163.171 70.9483 156.092 63.8695L155.878 63.6551L132.044 39.8218L131.438 39.2155C125.678 33.4531 121.965 29.7395 117.562 27.0414C113.667 24.654 109.419 22.8948 104.977 21.8281Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const featherTagLayout: ILayout = {
  name: "Feather Tag",
  properties: [
    {
      name: "count",
      type: "number",
      default: "23",
      placeholder: "Number of articles",
    },
    {
      name: "title",
      type: "text",
      default: "#tailwindcss",
      placeholder: "Tag Name",
    },
    {
      name: "description",
      type: "text",
      default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias velit similique illum rem consequatur fuga quidem sed. Sed perspiciatis totam quis quas pariatur id beatae odit tempore incidunt quaerat.`,
      placeholder: "Author Bio",
    },
    {
      name: "logo",
      type: "text",
      default:
        "https://d33wubrfki0l68.cloudfront.net/bd041a453e81e75ada1030d5498ade1f8e6f78fc/7b60b/images/airtable-logo.png",
      placeholder: "Logo URL",
    },
  ],
  getCSS,
  Component,
};
