import AbstractView from "./AbstractView.js";

export default class DashBoard extends AbstractView {
  constructor() {
    super();
    this.setTitle("DashBoard");
  }

  async getHtml() {
    return `
      <h1>Welcome back, Dom</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum optio accusantium ab, quis sed nihil soluta debitis veniam aliquam accusamus, ratione ea, tempore voluptate a repellendus autem non sit sint.
      </p>
      <p>
        <a href="/posts" data-link>View recent Posts</a>
      </p>
    `;
  }
}
