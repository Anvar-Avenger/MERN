const Link = require('../models/Link')

class LinkController {
    async index(req, res) {
        try {
            let links = await Link.find() // select all

            return res.json(links);
        } catch (e) {
            res.status(500).json({
                msg: "Nimadir noto\u2018g\u2018ri bajarilayapdi. Qaytadan urunib ko\u2018ring"
            })
        }
    }

    async create(req, res) {
        try {
            let {link} = req.body;

            let model = await Link.findOne({link})
            if (model) {
                return res.status(400).json({
                    msg: "Bunday havola allaqachon mavjud"
                });
            }

            model = new Link({
                link: link,
                user: req.user.user_id
            });
            await model.save();

            return res.status(201).json({
                success: true,
                msg: "Muvaffaqiyatli yaratildi",
                link: model
            })
        } catch (e) {
            return res.status(500).json({
                success: false,
                msg: "Qandaydir xatolik yuz berdi",
                error: e.message
            });
        }
    }

    async show(req, res) {
        let link_id = req.params.id;
        const link = await Link.findById(link_id);

        return res.json(link);
    }

    async open(req, res) {
        try {
            let link = await Link.findOne({_id: req.params.id})

            if (link) {
                link.clicks ++;
                await link.save();

                return res.redirect(link.link);
            }

            return res.status(400).json("Havola topilmadi");
        } catch (e) {
            return res.status(500).json({
                msg: "Qandaydir xatolik yuz berdi, qaytdan urunib ko\u2018ring"
            })
        }
    }

    async update() {
        return null;
    }

    async delete() {
        return null;
    }
}

module.exports = LinkController