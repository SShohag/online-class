var classes = [
    {'key':'A01', 'name':'Javascript', 'instructor':'Jhankar Mahbub', 'price':25, 'img':'https://miro.medium.com/max/1800/1*5eV1xmJs2-sJ4DdejfdnQA.png', 'url':'https://www.google.com/search?q=javascript+course+picture&tbm=isch&ved=2ahUKEwier5au0LrrAhWMQH0KHSblAggQ2-cCegQIABAA&oq=javascript+course+picture&gs_lcp=CgNpbWcQA1CL8QdYp4cIYMKPCGgAcAB4AIAB1AGIAeALkgEFMC45LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=aEFHX57bAYyB9QOmyotA&bih=695&biw=1366&rlz=1C1CHBD_enBD905BD905#imgrc=6VZtZyXpniQ-_M' },

    {'key':'A02', 'name':'Python', 'instructor':'juan de la petro', 'price':15, 'img':'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/124648412/original/c546b9481e08fefd84ff859c583b256d94da3e69/send-u-everything-you-need-to-program-in-python-courses-7827.jpg', 'url':'https://www.google.com/search?q=python+course+picture&rlz=1C1CHBD_enBD905BD905&sxsrf=ALeKk00UNvybuJoQfGLUwDqgmxkK-wtoXw:1598504912092&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjp1NPrzrrrAhVwyzgGHY2mBNAQ_AUoAnoECAwQBA&biw=1366&bih=695#imgrc=HtngdNYr26HyJM'},

    {'key':'A03', 'name':'HTML Css', 'instructor':'John', 'price':7, 'img':'https://images-na.ssl-images-amazon.com/images/I/31aX81I6vnL._SX351_BO1,204,203,200_.jpg', 'url':'https://www.amazon.com/-/pt/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=7ZT4ONNTXC1K&dchild=1&keywords=html+css+and+javascript&qid=1598503167&sprefix=javascript%2Caps%2C419&sr=8-3'},

    {'key':'A04', 'name':'Cooking', 'instructor':'Abraham', 'price':5, 'img':'https://www.akademijaoxford.com/en/images/professional-training-and-courses/cooking-course.png', 'url':'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.akademijaoxford.com%2Fen%2Fimages%2Fprofessional-training-and-courses%2Fcooking-course.png&imgrefurl=https%3A%2F%2Fwww.akademijaoxford.com%2Fen%2Fcooking_course_and_training.php&tbnid=cf-wNGGKi5wq3M&vet=12ahUKEwjTjqjiz7rrAhUZeH0KHQwqBE0QMygeegUIARCTAg..i&docid=syrxaZLRh61WPM&w=500&h=300&q=cooking%20course%20picture&ved=2ahUKEwjTjqjiz7rrAhUZeH0KHQwqBE0QMygeegUIARCTAg'},

    {'key':'A05', 'name':'C++', 'instructor':'Mr. Ziaur', 'price':3, 'img':'https://hackernoon.com/hn-images/1*ZJnECnO_uU2Ot-twtUyh8A.jpeg', 'url':'https://www.google.com/search?q=C%2B%2B+course+picture&tbm=isch&ved=2ahUKEwjBscrtzrrrAhXNeysKHV8QAYIQ2-cCegQIABAA&oq=C%2B%2B+course+picture&gs_lcp=CgNpbWcQDDoECAAQQzoCCAA6BggAEAcQHlDJmgdY178HYLjPB2gBcAB4AIABpgGIAbMEkgEDMC40mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=1D9HX8H3B833rQHfoISQCA&bih=695&biw=1366&rlz=1C1CHBD_enBD905BD905#imgrc=MvV-LfKIwmJ9MM'},

    {'key':'A06', 'name':'Auto-Cad', 'instructor':'Mizanur Rahman', 'price':12, 'img':'https://images-na.ssl-images-amazon.com/images/I/41ibPR5bcrL._SX384_BO1,204,203,200_.jpg', 'url':'https://www.amazon.com/-/pt/AutoCAD-20-Hours-Experience-Required/dp/098486315X/ref=pd_sim_14_5/143-6141965-3958146?_encoding=UTF8&pd_rd_i=098486315X&pd_rd_r=289d6eaf-c914-4cdc-bd6f-be6c2e1dc565&pd_rd_w=uuDwR&pd_rd_wg=8Q4F5&pf_rd_p=e2ec6e52-b3cf-46fd-9026-eedc9747371d&pf_rd_r=3V0NH3BHV9KW6PKAT37N&psc=1&refRID=3V0NH3BHV9KW6PKAT37N'},

    {'key':'A07', 'name':'Solid Works', 'instructor':'Solaiman Ali', 'price':8, 'img':'https://images-na.ssl-images-amazon.com/images/I/51eo6d9M4rL._SX385_BO1,204,203,200_.jpg','url':'https://www.amazon.com/-/pt/SOLIDWORKS-Quick-Start-David-Planchard/dp/163057323X/ref=sr_1_26?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3QVT9ELHSNEOI&dchild=1&keywords=solidworks+2020+tutorial&qid=1598504157&sprefix=solidworks%2Caps%2C447&sr=8-26'},

    {'key':'A08', 'name':'React full-stack', 'instructor':'Mark John', 'price':11, 'img':'https://img-a.udemycdn.com/course/750x422/1780436_aa46.jpg', 'url':'https://www.google.com/search?q=react+course+picture&tbm=isch&ved=2ahUKEwiTyN3u0LrrAhXCm0sFHbHEClEQ2-cCegQIABAA&oq=react+course+picture&gs_lcp=CgNpbWcQAzoECAAQQzoCCAA6BggAEAcQHlDqkgRYgLQEYLe3BGgAcAB4AYABswKIAZwIkgEHMC42LjAuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=70FHX9OUGcK3rtoPsYmriAU&bih=695&biw=1366&rlz=1C1CHBD_enBD905BD905#imgrc=RrK3wrnU5Xys2M'},

    {'key':'A09', 'name':'Mongo-bd', 'instructor':'Peter mark', 'price':5, 'img':'https://elysiumacademy.org/wp-content/uploads/2018/12/mango.jpg', 'url':'https://www.google.com/search?q=mongobd+course+picture&tbm=isch&ved=2ahUKEwi5_pOS0brrAhW8S30KHdswBqgQ2-cCegQIABAA&oq=mongobd+course+picture&gs_lcp=CgNpbWcQAzoECAAQQzoCCAA6BggAEAcQHlDrggNYnKQDYLWoA2gAcAB4AIABgAGIAaUHkgEDMC44mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=OUJHX_n9KryX9QPb4ZjACg&bih=695&biw=1366&rlz=1C1CHBD_enBD905BD905#imgrc=d2k3e4RYuXp8MM'},

    {'key':'A10', 'name':'English', 'instructor':'Abul Kalam', 'price':7, 'img':'https://m.media-amazon.com/images/I/51yVMXafYuL.jpg','url':'https://www.amazon.com/-/pt/Black-Book-Speaking-Fluent-English/dp/B089B6R6B7/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=spoken+english&qid=1598504025&sr=8-8'},

    {'key':'A11', 'name':'Computer', 'instructor':'Jamal Vuya', 'price':4, 'img':'https://myupdateweb.com/wp-content/uploads/2017/11/1483617573-computer-course-banners-top-1-1200x650.jpg', 'url':'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmyupdateweb.com%2Fwp-content%2Fuploads%2F2017%2F11%2F1483617573-computer-course-banners-top-1-1200x650.jpg&imgrefurl=https%3A%2F%2Fmyupdateweb.com%2Fcomputer-courses-that-give-you-an-edge%2F&tbnid=GNB6nluuyH_wnM&vet=12ahUKEwjOtsDC0brrAhXRGnIKHV5oBkQQMygJegUIARDGAQ..i&docid=x26F3MwBIiutmM&w=1200&h=650&q=computer%20course%20picture&ved=2ahUKEwjOtsDC0brrAhXRGnIKHV5oBkQQMygJegUIARDGAQ'},

    {'key':'A12', 'name':'Design', 'instructor':'Borkotullah', 'price':13, 'img':'https://mahbubosmane.com/wp-content/uploads/2018/10/Web-Development-Courses.jpg', 'url':'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmahbubosmane.com%2Fwp-content%2Fuploads%2F2018%2F10%2FWeb-Development-Courses.jpg&imgrefurl=https%3A%2F%2Fmahbubosmane.com%2Fweb-development-course%2F&tbnid=yJy6HBpc_cWUGM&vet=12ahUKEwjeqtKa0rrrAhWBFCsKHeD6BsoQMygIegUIARDPAQ..i&docid=rYPI3qSAjDBM7M&w=764&h=390&q=web%20design%20course%20picture&ved=2ahUKEwjeqtKa0rrrAhWBFCsKHeD6BsoQMygIegUIARDPAQ'},

    {'key':'A13', 'name':'Marketing', 'instructor':'Luxman', 'price':10, 'img':'https://marketingland.com/wp-content/ml-loads/2016/05/digitalni-marketing.jpg', 'url':'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmarketingland.com%2Fwp-content%2Fml-loads%2F2016%2F05%2Fdigitalni-marketing.jpg&imgrefurl=https%3A%2F%2Fmarketingland.com%2F5-best-digital-marketing-courses-modern-day-marketer-175073&tbnid=zlWEXwYjgXrMUM&vet=12ahUKEwier5au0LrrAhWMQH0KHSblAggQMygLegUIARDcAQ..i&docid=nZ5rxZwdY9QIkM&w=2258&h=958&q=marketing%20course%20picture&ved=2ahUKEwier5au0LrrAhWMQH0KHSblAggQMygLegUIARDcAQ'},

    {'key':'A14', 'name':'Bootstrap', 'instructor':'Bellal Hossain', 'price':11, 'img':'https://img-a.udemycdn.com/course/750x422/1313502_b57f_2.jpg', 'url':'https://www.google.com/search?q=boostrap+course+picture&tbm=isch&ved=2ahUKEwiq2-u80rrrAhUVB3IKHUUPDQIQ2-cCegQIABAA&oq=boostrap+course+picture&gs_lcp=CgNpbWcQAzoICAAQCBAHEB5Q9tYBWOTqAWD27QFoAHAAeACAAcEBiAHZCJIBAzAuOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=n0NHX-qPKJWOyAPFnrQQ&bih=695&biw=1366&rlz=1C1CHBD_enBD905BD905#imgrc=G5IVrocYldgd_M'},

    {'key':'A15', 'name':'Photoshop', 'instructor':'Shekhor ', 'price':10, 'img':'https://img-a.udemycdn.com/course/750x422/1319526_2f62_5.jpg', 'url':'https://www.google.com/search?q=photoshop+course+picture&tbm=isch&ved=2ahUKEwih0LHM0rrrAhW0nEsFHQ9sCCwQ2-cCegQIABAA&oq=photoshop+course+picture&gs_lcp=CgNpbWcQAzoICAAQCBAHEB46BggAEAgQHlCo6QNYrYoEYO-SBGgAcAB4AIABpAGIAYQKkgEEMC4xMJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=wENHX6HwD7S5rtoPj9ih4AI&bih=695&biw=1366&rlz=1C1CHBD_enBD905BD905#imgrc=2PFxQmbwH7PR8M'}
];

export default classes;