import escapeHtml from "escape-html";
import { Text } from "slate";

const serialize = (node: any) => {
  // console.log(node);
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    // if (node.bold) {
    //   string = `<strong>${string}</strong>`;
    // }
    return string;
  }

  const children = node.children.map((n: any) => serialize(n)).join("");

  // console.log(node.type);
  switch (node.type) {
    case "quote":
      return `<blockquote><p>${children}</p></blockquote>`;
    case "paragaph":
      return `<p>${children}</p>`;
    case "headingTwo":
      return `<h2>${children}</h2>`;
    case "link":
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    case "unorderedList":
      return `<ul>${children}</ul>`;
    default:
      return children;
  }
};

export default serialize;
