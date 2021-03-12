// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const dados = [
  { evento: 1, inicio: "", fim: "", extras: "" },
  { evento: 1, inicio: "", fim: "", extras: "" },
  { evento: 2, inicio: "", fim: "", extras: "" },
  { evento: 1, inicio: "", fim: "", extras: "" },
  { evento: 3, inicio: "", fim: "", extras: "" },
  { evento: 1, inicio: "", fim: "", extras: "" },
  { evento: 3, inicio: "", fim: "", extras: "" },
  { evento: 2, inicio: "", fim: "", extras: "" },
  { evento: 1, inicio: "", fim: "", extras: "" }
]
export default (req, res) => {
  res.status(200).json(dados)
}
