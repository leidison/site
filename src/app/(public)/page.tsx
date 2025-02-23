const productUrl = process.env.PRODUCT_URL

export default function Page() {
  return (
    <div>
      <h1>Home</h1>

      <div>
        <a href={productUrl}>Acessar PetraSIG</a>
      </div>
    </div>
  )
}
