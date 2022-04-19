module.exports = {
    index: (req, res) => {
        return res.render("index", {
            title: 'Petshop Anymals',
            menulist: ['Home', 'Sobre', 'Serviços', 'Contato'],
            footer: [
                [
                    {
                        url: "mailto:email@gmail.com",
                        icone: "img/footer-email.png"
                    },
                    {
                        url: "http://wa.me/+55",
                        icone: "img/footer-email.png"
                    }
                ],
                [
                    "Caminhada",
                    "Vacinação",
                    "Petshop",
                    "Banho",
                    "Tosa",
                ],
                [
                    {
                        url: "https://instagram.com",
                        icone: "img/footer-email.png"
                    },
                    {
                        url: "https://facebook.com",
                        icone: "img/footer-email.png"
                    },
                    {
                        url: "https://youtube.com",
                        icone: "img/footer-email.png"
                    },
                    {
                        url: "https://twitter.com",
                        icone: "img/footer-email.png"
                    }, 
                ]
            ]
        })
    }
}