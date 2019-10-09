# setup SSD
ssd = District.create(name:"Seattle School District")
School.create(
  name:"Adams Elementary School",
  district: ssd,
  address: "6110 28th Ave NW Seattle, WA 98107",
  phone: "206-252-1300",
  homepage_url: "http://adamses.seattleschools.org/",
  grade_level: "elementary"
)

# elementary seeds
School.create(
  name:"Alki Elementary School",
  district: ssd,
  address: "3010  59th Ave SW Seattle, WA 98116",
  phone: "206-252-9050",
  homepage_url: "https://alkies.seattleschools.org/",
  grade_level: "elementary"
)

School.create(
  name: "Arbor Heights Elementary School",
  address: "3701 SW 104th Street, Seattle, WA 98146",
  phone: "206-252-9250",
  district: ssd,
  homepage_url: "https://arborheightses.seattleschools.org/",
  grade_level: "elementary"
)

School.create(
  name: "Daniel Bagley Elementary School",
  address: "7821 Stone Ave N Seattle, WA 98103",
  phone: "206-252-5110",
  district: ssd,
  homepage_url: "http://bagleyes.seattleschools.org/",
  grade_level: "elementary"
)

School.create(
  name: "Beacon Hill International Elementary School",
  address: "2025  14th Ave S Seattle, WA 98144",
  phone: "206-252-2700",
  district: ssd,
  homepage_url: "https://beaconhilles.seattleschools.org/",
  grade_level: "elementary"
)

School.create(
  name: "William Cullen Bryant Elementary School",
  address: "3311 NE 60th St Seattle, WA 98115",
  phone: "206-252-5200",
  district: ssd,
  homepage_url: "https://bryantes.seattleschools.org/",
  grade_level: "elementary"
)

School.create(
  name: "Cascadia Elementary School",
  address: "1700 N 90th St Seattle, WA 98103",
  phone: "206-413-2000",
  district: ssd,
  homepage_url: "http://cascadiaes.seattleschools.org/",
  grade_level: "elementary"
)

School.create(
  name: "Cedar Park Elementary School",
  address: "13224 37th Ave NE Seattle, WA 98125​",
  phone: "206-252-4300",
  district: ssd,
  homepage_url: "https://cedarparkes.seattleschools.org/",
  grade_level: "elementary"
)

School.create(
  name: "Frantz H. Coe Elementary School",
  address: "2424  7th Ave W Seattle, WA 98119",
  phone: "206-252-2000",
  district: ssd,
  homepage_url: "https://coees.seattleschools.org/",
  grade_level: "elementary"
)

# k-8 schools
School.create(
  name: "Catharine Blaine",
  address: "2550 34th Ave W Seattle, WA 98199",
  phone: "206-252-1920",
  district: ssd,
  homepage_url: "https://blainek8.seattleschools.org/",
  grade_level: "k-8"
)

School.create(
  name: "Louisa Boren STEM",
  address: "5950 Delridge Way SW Seattle, WA 98106",
  phone: "206-252-8450",
  district: ssd,
  homepage_url: "https://borenstemk8.seattleschools.org/",
  grade_level: "k-8"
)

# middle schools
School.create(
  name: "Jane Addams Middle School",
  address: "11051 34th Ave NE Seattle, WA 98125",
  phone: "206-252-4500",
  district: ssd,
  homepage_url: "https://addamsms.seattleschools.org/",
  grade_level: "middle"
)

School.create(
  name: "David T. Denny International Middle School",
  address: "2601 SW Kenyon St Seattle, WA 98126",
  phone: "206-252-9000",
  district: ssd,
  homepage_url: "https://dennyms.seattleschools.org/",
  grade_level: "middle"
)

# high schools
School.create(
  name: "Ballard High School",
  address: "1418 NW 65th St Seattle, WA 98117",
  phone: "206-252-1000",
  district: ssd,
  homepage_url: "https://ballardhs.seattleschools.org/",
  grade_level: "high"
)

School.create(
  name: "The Center High School",
  address: "305 Harrison St Seattle, WA 98109",
  phone: "206-252-9850",
  district: ssd,
  homepage_url: "https://centerhs.seattleschools.org/",
  grade_level: "high"
)


# users
c = User.create(name:"Chris", email:"c@email.com", permissions:"admin", password:"password")
c.schools << School.find(1)
c.avatar.attach(io: File.open(Rails.root.join('test_avatars/1.png')), filename: '1.png')

ch = User.create(name:"Chukundi", email:"ch@email.com", permissions:"admin", password:"password")
ch.schools << School.find(2)
ch.avatar.attach(io: File.open(Rails.root.join('test_avatars/2.jpg')), filename: '2.jpg')

j = User.create(name:"Jeron", email:"j@email.com", permissions:"admin", password:"password")
j.schools << School.find(3)
j.avatar.attach(io: File.open(Rails.root.join('test_avatars/3.jpg')), filename: '3.jpg')

User.create(name:"Guest", email:"g@email.com", password:"password")
u = User.create(name:"Site Rep", email:"sr@email.com", password:"password", permissions:"site_rep")
u.schools << School.all.last

# events
Event.create(eventable:District.find(1), title:"District Event", organizer_id:1, start:Time.parse("Oct 18 2019 10:19"), end:Time.parse("Oct 18 2019 11:19"))

Event.create(eventable:School.find(1), title:"School Event", organizer_id:School.find(1).site_rep.id, start:Time.parse("Oct 10 2019 10:19"), end:Time.parse("Oct 11 2019 11:19"))
Event.create(eventable:School.all.last, title:"School Event", organizer_id:School.all.last.site_rep.id, start:Time.parse("Oct 11 2019 10:19"), end:Time.parse("Oct 12 2019 11:19"))
Event.create(eventable:School.all.last, title:"School Event", organizer_id:School.all.last.site_rep.id, start:Time.parse("Oct 12 2019 10:19"), end:Time.parse("Oct 13 2019 11:19"))

#blogs
Blog.create(blogable:District.find(1), title:"District Blog", author_id:1, content: "Lorem Ipsum")
Blog.create(blogable:School.find(1), title:"School Blog", author_id:1, content: "Lorem Ipsum")