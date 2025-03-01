import { Component, inject, signal } from '@angular/core';
import { TestPageService } from '../services/test-page.service';
import { Character } from '../character.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [
    RouterModule
  ],
  providers: [TestPageService],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
  public testSig = signal('Hello!');
  public testPageSrv = inject(TestPageService)

  public mockdata: Character[] =
     [
        {
            "id": "332",
            "name": "Hulk",
            "powerstats": {
                "intelligence": "88",
                "strength": "100",
                "speed": "63",
                "durability": "100",
                "power": "98",
                "combat": "85"
            },
            "biography": {
                "fullName": "Bruce Banner",
                "alterEgos": "No alter egos found.",
                "aliases": [
                    "Annihilator",
                    "Captain Universe",
                    "Joe Fixit",
                    "Mr. Fixit",
                    "Mechano",
                    "Professor",
                    "Jade Jaws",
                    "Golly Green Giant"
                ],
                "placeOfBirth": "Dayton, Ohio",
                "firstAppearance": "Incredible Hulk #1 (May, 1962)",
                "publisher": "Marvel Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human \/ Radiation",
                "height": [
                    "8'0",
                    "244 cm"
                ],
                "weight": [
                    "1400 lb",
                    "630 kg"
                ],
                "eyeColor": "Green",
                "hairColor": "Green"
            },
            "work": {
                "occupation": "Nuclear physicist, Agent of S.H.I.E.L.D.",
                "base": "(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico"
            },
            "connections": {
                "groupAffiliation": "Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four",
                "relatives": "Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. 'Thunderbolt' Ross (father"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/83.jpg"
            }
        },
        {
            "id": "149",
            "name": "Captain America",
            "powerstats": {
                "intelligence": "69",
                "strength": "19",
                "speed": "38",
                "durability": "55",
                "power": "60",
                "combat": "100"
            },
            "biography": {
                "fullName": "Steve Rogers",
                "alterEgos": "No alter egos found.",
                "aliases": [
                    "Nomad",
                    "The Captain"
                ],
                "placeOfBirth": "Manhattan, New York City, New York",
                "firstAppearance": "Captain America Comics #1 (March 1941)",
                "publisher": "Marvel Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human",
                "height": [
                    "6'2",
                    "188 cm"
                ],
                "weight": [
                    "240 lb",
                    "108 kg"
                ],
                "eyeColor": "blue",
                "hairColor": "blond"
            },
            "work": {
                "occupation": "Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.",
                "base": "New York City"
            },
            "connections": {
                "groupAffiliation": "Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)",
                "relatives": "Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/274.jpg"
            }
        },
        {
            "id": "346",
            "name": "Iron Man",
            "powerstats": {
                "intelligence": "100",
                "strength": "85",
                "speed": "58",
                "durability": "85",
                "power": "100",
                "combat": "64"
            },
            "biography": {
                "fullName": "Tony Stark",
                "alterEgos": "No alter egos found.",
                "aliases": [
                    "Iron Knight",
                    "Hogan Potts",
                    "Spare Parts Man",
                    "Cobalt Man II",
                    "Crimson Dynamo",
                    "Ironman"
                ],
                "placeOfBirth": "Long Island, New York",
                "firstAppearance": "Tales of Suspence #39 (March, 1963)",
                "publisher": "Marvel Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human",
                "height": [
                    "6'6",
                    "198 cm"
                ],
                "weight": [
                    "425 lb",
                    "191 kg"
                ],
                "eyeColor": "Blue",
                "hairColor": "Black"
            },
            "work": {
                "occupation": "Inventor, Industrialist; former United States Secretary of Defense",
                "base": "Seattle, Washington"
            },
            "connections": {
                "groupAffiliation": "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
                "relatives": "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/85.jpg"
            }
        },
        {
            "id": "659",
            "name": "Thor",
            "powerstats": {
                "intelligence": "69",
                "strength": "100",
                "speed": "83",
                "durability": "100",
                "power": "100",
                "combat": "100"
            },
            "biography": {
                "fullName": "Thor Odinson",
                "alterEgos": "Rune King Thor",
                "aliases": [
                    "Donald Blake",
                    "Sigurd Jarlson",
                    "Jake Olsen",
                    "Donar the Mighty"
                ],
                "placeOfBirth": "Asgard",
                "firstAppearance": "Journey into Mystery #83 (August, 1962)",
                "publisher": "Rune King Thor",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Asgardian",
                "height": [
                    "6'6",
                    "198 cm"
                ],
                "weight": [
                    "640 lb",
                    "288 kg"
                ],
                "eyeColor": "Blue",
                "hairColor": "Blond"
            },
            "work": {
                "occupation": "King of Asgard; formerly EMS Technician; Physician",
                "base": "New York, New York"
            },
            "connections": {
                "groupAffiliation": "Avengers",
                "relatives": "Odin (father), Gaea (mother), Frigga (step-mother), Loki (step-brother), Vidar (half-brother), Buri (paternal great-grandfather), Bolthorn (maternal great grandfather), Bor (grandfather), Bestla (grandmother), Vili (uncle), Ve (uncle), Sigyn (former sister-in-law), Hela (alleged niece), Jormungand (alleged nephew), Fernis Wolf (alleged nephew)"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/140.jpg"
            }
        },
        {
            "id": "708",
            "name": "Wasp",
            "powerstats": {
                "intelligence": "63",
                "strength": "17",
                "speed": "58",
                "durability": "52",
                "power": "29",
                "combat": "42"
            },
            "biography": {
                "fullName": "Janet Van Dyne",
                "alterEgos": "No alter egos found.",
                "aliases": [
                    "Pixie"
                ],
                "placeOfBirth": "Cresskill, New Jersey",
                "firstAppearance": "TALES TO ASTONISH #44",
                "publisher": "Marvel Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Female",
                "race": "Human",
                "height": [
                    "5'4",
                    "163 cm"
                ],
                "weight": [
                    "110 lb",
                    "50 kg"
                ],
                "eyeColor": "Blue",
                "hairColor": "Auburn"
            },
            "work": {
                "occupation": "Adventurer, fashion designer, independently wealthy socialite",
                "base": "Avengers Mansion"
            },
            "connections": {
                "groupAffiliation": "Avengers",
                "relatives": "Vernon Van Dyne (father, deceased), unnamed mother (deceased), Henry \"Hank\" Pym (ex-husband)"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/155.jpg"
            }
        },
        {
            "id": "30",
            "name": "Ant-Man",
            "powerstats": {
                "intelligence": "100",
                "strength": "18",
                "speed": "23",
                "durability": "28",
                "power": "32",
                "combat": "32"
            },
            "biography": {
                "fullName": "Hank Pym",
                "alterEgos": "Giant-Man, Goliath, Wasp II, Yellowjacket",
                "aliases": [
                    "Hank Pym",
                    "Doctor Pym",
                    "Ant-Man",
                    "Goliath",
                    "Yellowjacket",
                    "Wasp",
                    "Earth's Scientist Supreme"
                ],
                "placeOfBirth": "Elmsford, New York",
                "firstAppearance": "Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)",
                "publisher": "Giant-Man",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human",
                "height": [
                    "6'11",
                    "211 cm"
                ],
                "weight": [
                    "270 lb",
                    "122 kg"
                ],
                "eyeColor": "Blue",
                "hairColor": "Blond"
            },
            "work": {
                "occupation": "Adventurer, Biochemist, former manager of Avengers Compound",
                "base": "Avengers Compound, Los Angeles; formerly Infinite Avengers Mansion; Captive aboard a Skrull ship; Avengers Mansion, New York City, New York"
            },
            "connections": {
                "groupAffiliation": "Avengers Academy, Secret Avengers; formerly Mighty Avengers, Avengers (founding member), Defenders, Future Iron Man's Team",
                "relatives": "-"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/857.jpg"
            }
        },
        {
            "id": "536",
            "name": "Quicksilver",
            "powerstats": {
                "intelligence": "63",
                "strength": "28",
                "speed": "100",
                "durability": "60",
                "power": "81",
                "combat": "56"
            },
            "biography": {
                "fullName": "Pietro Django Maximoff",
                "alterEgos": "No alter egos found.",
                "aliases": [
                    "Pietro Frank",
                    "Gypsy Davey",
                    "Mateo Maximoff"
                ],
                "placeOfBirth": "Wundagore Mountain, Transia (in Eastern Europe)",
                "firstAppearance": "X-MEN Vol. 1 #4",
                "publisher": "Marvel Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Mutant",
                "height": [
                    "6'0",
                    "183 cm"
                ],
                "weight": [
                    "175 lb",
                    "79 kg"
                ],
                "eyeColor": "Blue",
                "hairColor": "Silver"
            },
            "work": {
                "occupation": "(current) Adventurer, (former) Terrorist, officer of the Inhumans militia, United States government operative",
                "base": "Currently a castle on the Hudson River in upstate New York that is owned by the High Evolutionary; (former) Transia; Avengers Mansion, Manhattan; Avengers Compound, Palos Verdes, California; X-Factor headquarters, Washington D. C."
            },
            "connections": {
                "groupAffiliation": "Avengers, unofficial member of the Royal Family of the Inhumans, (former) Brotherhood of Evil Mutants I, X-Factor II",
                "relatives": "Wanda Maximoff (Scarlet Witch, sister), Magnus (Magneto, father), Magda (mother, deceased), Django Maximoff (adoptive father), Marya Maximoff (adoptive mother, deceased), Crystal (wife), Maximoff, Luna (daughter), Medusa (sister-in-law), Black Bolt, Gorgon, Karnak, Triton, Maximus (cousins by marriage), Vision (ex-brother-in-law)"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/115.jpg"
            }
        },
        {
            "id": "579",
            "name": "Scarlet Witch",
            "powerstats": {
                "intelligence": "100",
                "strength": "10",
                "speed": "29",
                "durability": "70",
                "power": "100",
                "combat": "80"
            },
            "biography": {
                "fullName": "Wanda Maximoff",
                "alterEgos": "No alter egos found.",
                "aliases": [
                    "Wanda Frank",
                    "Wanda Magnus",
                    "Ana Maximoff",
                    "Gypsy Witch",
                    "The Witch"
                ],
                "placeOfBirth": "Wundagore Mountain, Transia",
                "firstAppearance": "Uncanny X-Men #4 (March, 1964)",
                "publisher": "Marvel Comics",
                "alignment": "bad"
            },
            "appearance": {
                "gender": "Female",
                "race": "Mutant",
                "height": [
                    "5'7",
                    "170 cm"
                ],
                "weight": [
                    "132 lb",
                    "59 kg"
                ],
                "eyeColor": "Blue",
                "hairColor": "Brown"
            },
            "work": {
                "occupation": "Adventurer; formerly witchcraft tutor, housewife, terrorist",
                "base": "Mobile; formerly The Works; Avengers Compound, California; Avengers Mansion, New York"
            },
            "connections": {
                "groupAffiliation": "None, Formerly Avengers, Avengers West Coast, Force Works, Queen's Vengeance, Secret Defenders, Lady Liberators, Brotherhood of Evil Mutants",
                "relatives": "Pietro (Quicksilver, twin brother), Magnus (Magneto, father), Magda Lehnsherr (mother, deceased), Anya (half-sister, deceased), Lorna Dane (Polaris, half-sister), Vision (estranged husband), Django Maximoff (foster father, deceased), Marya Maximoff (foster mother, deceased), Crystal (sister-in-law), Luna (niece), Tommy & Billy (reincarnated sons), Talia Wagner (Nocturne, alternate reality daughter)"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/444.jpg"
            }
        },
        {
            "id": "106",
            "name": "Black Panther",
            "powerstats": {
                "intelligence": "88",
                "strength": "16",
                "speed": "30",
                "durability": "60",
                "power": "41",
                "combat": "100"
            },
            "biography": {
                "fullName": "T'Challa",
                "alterEgos": "No alter egos found.",
                "aliases": [
                    "Mr. Okonkwo",
                    "The Man Without Fear",
                    "Luke Charles",
                    "Black Leopard",
                    "the Client",
                    "Coal Tiger",
                    "has impersonated Daredevil and others on occasion"
                ],
                "placeOfBirth": "Wakanda, Africa",
                "firstAppearance": "Fantastic Four Vol. 1 #52 (1966)",
                "publisher": "Marvel Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human",
                "height": [
                    "6'0",
                    "183 cm"
                ],
                "weight": [
                    "200 lb",
                    "90 kg"
                ],
                "eyeColor": "Brown",
                "hairColor": "Black"
            },
            "work": {
                "occupation": "King and Chieftain of Wakanda, scientist; former school teacher",
                "base": "Wakanda, Mobile"
            },
            "connections": {
                "groupAffiliation": "Formerly Fantastic Four, Secret Avengers, Avengers, Pendragons, Queen's Vengeance, former Fantastic Force financier",
                "relatives": "Bashenga (paternal ancestor, deceased), Azzuri the Wise (paternal grandfather, deceased), Nanali (paternal grandmother, deceased), Chanda (paternal grandfather, presumably deceased), T\ufffdChaka (father, deceased), S'Yan (uncle, deceased), N\ufffdYami (mother, deceased), Ramonda (stepmother), Hunter (adopted brother), Jakarra (half-brother), Shuri (sister), Ororo Munroe (wife), Joshua Itobo, Ishanta, Zuni, M'Koni, T'Shan (cousins), Wheeler (cousin by marriage, deceased), Billy Wheeler (1st cousin once removed)"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/247.jpg"
            }
        },
        {
            "id": "697",
            "name": "Vision",
            "powerstats": {
                "intelligence": "100",
                "strength": "72",
                "speed": "54",
                "durability": "95",
                "power": "100",
                "combat": "70"
            },
            "biography": {
                "fullName": "Vision",
                "alterEgos": "Anti-Vision, Vision II",
                "aliases": [
                    "Victor Shade"
                ],
                "placeOfBirth": "-",
                "firstAppearance": "Avengers Vol.1 #57, Young Avengers # 4",
                "publisher": "Anti-Vision",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Android",
                "height": [
                    "6'3",
                    "191 cm"
                ],
                "weight": [
                    "300 lb",
                    "135 kg"
                ],
                "eyeColor": "Gold",
                "hairColor": "No Hair"
            },
            "work": {
                "occupation": "-",
                "base": "Mobile. Formerly Avengers Mansion, New York City and Avengers Compound"
            },
            "connections": {
                "groupAffiliation": "Young Avengers, formerly; Avengers, West Coast Avengers, Defenders, Queen's Vengeance",
                "relatives": "Wanda Maximoff (Scarlet Witch, ex-wife), Thomas Shepherd (Speed, son), William Kaplan (Wiccan, son), Ultron (\"father\"), Henry Pym (Ant-Man, \"grandfather\"), Pietro Maximoff (Quicksilver, ex-brother-in-law), Erik Magnus Lensher (Magneto, ex-father-in-law), Jocasta (fellow creation, \"sister\"), Simon Williams (Wonder Man, \"brother\"), Victor Mancha (fellow creation, half brother), Alkhema (fellow creation, \"stepmother\")"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/532.jpg"
            }
        },
        {
            "id": "157",
            "name": "Captain Marvel",
            "powerstats": {
                "intelligence": "84",
                "strength": "88",
                "speed": "71",
                "durability": "95",
                "power": "100",
                "combat": "90"
            },
            "biography": {
                "fullName": "Carol Danvers",
                "alterEgos": "Binary, Warbird",
                "aliases": [
                    "Ace",
                    "Binary",
                    "Lady Marvel",
                    "Warbird",
                    "others used during her espionage career"
                ],
                "placeOfBirth": "Boston, Massachusetts",
                "firstAppearance": "Ms. Marvel #1",
                "publisher": "Binary",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Female",
                "race": "Human-Kree",
                "height": [
                    "5'11",
                    "180 cm"
                ],
                "weight": [
                    "165 lb",
                    "74 kg"
                ],
                "eyeColor": "Blue",
                "hairColor": "Blond"
            },
            "work": {
                "occupation": "Former National Aeronautics and Space Administration security Chief, former magazine editor, former freelance writer, former military intelligence officer.",
                "base": "Avengers Mansion"
            },
            "connections": {
                "groupAffiliation": "currently Avengers, former companion to the X-Men (as Carol Danvers), former member of the Starjammers (as Binary), Former Avenger (as Ms. Marvel)",
                "relatives": "Marie Danvers (mother), Joseph Danvers, Sr. (father), Joseph Danvers, Jr. (brother), Steve Danvers (brother, deceased), Marcus Immortus (Danvers) (\"son\", deceased)"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/103.jpg"
            }
        },
        {
            "id": "107",
            "name": "Black Widow",
            "powerstats": {
                "intelligence": "75",
                "strength": "13",
                "speed": "33",
                "durability": "30",
                "power": "36",
                "combat": "100"
            },
            "biography": {
                "fullName": "Natasha Romanoff",
                "alterEgos": "No alter egos found.",
                "aliases": [
                    "Yelena Belova",
                    "Natasha Romanoff",
                    "Natasha",
                    "Tasha",
                    "Madame Natasha",
                    "Nancy Rushman",
                    "Laura Matthers",
                    "Nadine Roman",
                    "\"Oktober\"",
                    "Black Pearl",
                    "Ebon Flame"
                ],
                "placeOfBirth": "-",
                "firstAppearance": "Tales of Suspense #52",
                "publisher": "Marvel Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Female",
                "race": "Human",
                "height": [
                    "5'7",
                    "170 cm"
                ],
                "weight": [
                    "131 lb",
                    "59 kg"
                ],
                "eyeColor": "Green",
                "hairColor": "Auburn"
            },
            "work": {
                "occupation": "Adventurer, Intelligence agent, former ballerina",
                "base": "Mobile"
            },
            "connections": {
                "groupAffiliation": "Secret Avengers; formerly Thunderbolts (as Yelena Belova), Nick Fury, Mighty Avengers, S.H.I.E.L.D., Avengers, Champions of Los Angeles, Lady Liberators, KGB, \"Marvel Knights\", partner of Daredevil, Hawkeye, Boris Turgenov, Logan",
                "relatives": "Unnamed parents (presumed deceased); Alexi Shostakov (Red Guardian, estranged husband); Vindiktor (alleged brother, deceased)"
            },
            "image": {
                "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/248.jpg"
            }
        }
    ]

  public mockDataSig = signal(this.mockdata);

  public filterHeroes(ev: any){
    // this.mockDataSig.update(ev.filter())
    console.log(ev.target?.value)

    // if (!ev.target?.value) {
    //   this.filteredLocationList = this.housingLocationList;
    //   return;
    // }

    this.mockDataSig.update(value =>{
      return this.mockdata.filter(
        hero => hero?.name.toLowerCase().includes(ev.target?.value.toLowerCase())
      );
    })
  }
}
