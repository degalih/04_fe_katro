const Favorite = {
  async render() {
    return `
    <div class="section-title">
      <div class="container">
        <h2>Favorites</h2>
      </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;
