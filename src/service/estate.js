const baseUrl = `http://localhost:8010/proxy/feeds/Aanbod.svc/json`
//http://partnerapi.funda.nl/feeds/Aanbod.svc/ac1b0b1572524640a0ecc54de453ea9f

export default {
  async getEstates(query) {
    const response = await fetch(
      `${baseUrl}/${process.env.VUE_APP_API_KEY}/?${new URLSearchParams(query)}`
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch estates: ${response.statusText}`)
    }

    return await response.json()
  },

  async getDetail(id) {
    const response = await fetch(
      `${baseUrl}/detail/${process.env.VUE_APP_API_KEY}/koop/${id}`
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch estates: ${response.statusText}`)
    }

    return await response.json()
  },
}
