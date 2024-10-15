/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("Pets")
    .del()
    .then(function () {
      return knex("Pets").insert([
        {
          user_id: 2,
          name: "Buddy",
          species: "dog",
          breed: "labrador_retriever",
          age: "3",
          description: "Energetic and loves the outdoors.",
          photo_url:
            "https://www.dogster.com/wp-content/uploads/2024/04/labrador-retriever-dog-standing-in-the-grass_Alexander-Rim_Shutterstock.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Rex",
          species: "dog",
          breed: "german_shepherd",
          age: "4",
          description: "Loyal and protective.",
          photo_url:
            "https://images.squarespace-cdn.com/content/v1/5baffc59fb182025fee90fef/92442d27-b354-4240-b998-bcbe0f1cd91c/German-shepherd-training-main.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Charlie",
          species: "dog",
          breed: "golden_retriever",
          age: "5",
          description: "Friendly and loves to swim.",
          photo_url:
            "https://dogtime.com/wp-content/uploads/sites/12/2024/03/GettyImages-1285465107.jpg?resize=1200,630",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Max",
          species: "dog",
          breed: "bulldog",
          age: "3",
          description: "Calm and courageous.",
          photo_url:
            "https://cdn.britannica.com/07/234207-050-0037B589/English-bulldog-dog.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Oliver",
          species: "dog",
          breed: "beagle",
          age: "2",
          description: "Curious and playful.",
          photo_url:
            "https://www.akc.org/wp-content/uploads/2021/01/Beagle-puppy-standing-in-the-grass-1.jpeg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Piper",
          species: "dog",
          breed: "poodle",
          age: "4",
          description: "Intelligent and active.",
          photo_url:
            "https://www.dogster.com/wp-content/uploads/2023/08/red-toy-poodle-in-the-park_Mykhaylo_Kozelko_Shutterstock-600x400.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Rocky",
          species: "dog",
          breed: "rottweiler",
          age: "3",
          description: "Confident and fearless.",
          photo_url:
            "https://cdn.britannica.com/69/234469-050-B883797B/Rottweiler-dog.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Bella",
          species: "dog",
          breed: "yorkshire_terrier",
          age: "2",
          description: "Affectionate and energetic.",
          photo_url:
            "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66e45a70380fdf8f4505eda2_EA8nH-38tNWSoSWGsknDRJvGMS3JLY84_UF-feghmeQ.jpeg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Duke",
          species: "dog",
          breed: "boxer",
          age: "3",
          description: "Playful and loyal.",
          photo_url:
            "https://media.graphassets.com/resize=height:404,width:718/output=format:webp/2zWkueuOSnin7luJKVrU",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Lola",
          species: "dog",
          breed: "dachshund",
          age: "4",
          description: "Charming and curious.",
          photo_url:
            "https://www.akc.org/wp-content/uploads/2017/11/Longhaired-Dachshund-standing-outdoors.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Cleo",
          species: "cat",
          breed: "persian",
          age: "2",
          description: "Calm and loves to cuddle.",
          photo_url:
            "https://images.squarespace-cdn.com/content/5e8a2944d7ce562e250eb009/1646832190680-GMPS3W54A2K2AMX8ABKQ/sergey-semin-6TiFuD_1q4o-unsplash.jpg?format=1500w&content-type=image%2Fjpeg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Mittens",
          species: "cat",
          breed: "siamese",
          age: "3",
          description: "Talkative and social.",
          photo_url:
            "https://www.thesprucepets.com/thmb/Kq35BB9eZNo6G0aQHiWONydOe9s=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/siamese-cat-5073151-08efba799e9c4638b80c7d0f9b73d7f7.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Nala",
          species: "cat",
          breed: "maine_coon",
          age: "4",
          description: "Affectionate and playful.",
          photo_url:
            "https://www.royalcanin.com/global/-/media/royal-canin-website/animal/cats/featured-images/maine-coon-cat.ashx",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Luna",
          species: "cat",
          breed: "ragdoll",
          age: "1",
          description: "Gentle and loves to be held.",
          photo_url:
            "https://www.royalcanin.com/global/-/media/royal-canin-website/animal/cats/featured-images/ragdoll-cat.ashx",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Simba",
          species: "cat",
          breed: "bengal",
          age: "3",
          description: "Active and loves to climb.",
          photo_url:
            "https://www.royalcanin.com/global/-/media/royal-canin-website/animal/cats/featured-images/bengal-cat.ashx",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Sophie",
          species: "cat",
          breed: "sphynx",
          age: "2",
          description: "Curious and affectionate.",
          photo_url:
            "https://www.royalcanin.com/global/-/media/royal-canin-website/animal/cats/featured-images/sphynx-cat.ashx",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Oliver",
          species: "cat",
          breed: "british_shorthair",
          age: "5",
          description: "Calm and adaptable.",
          photo_url:
            "https://www.royalcanin.com/global/-/media/royal-canin-website/animal/cats/featured-images/british-shorthair-cat.ashx",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Lily",
          species: "cat",
          breed: "abyssinian",
          age: "2",
          description: "Playful and intelligent.",
          photo_url:
            "https://www.royalcanin.com/global/-/media/royal-canin-website/animal/cats/featured-images/abyssinian-cat.ashx",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Chloe",
          species: "cat",
          breed: "scottish_fold",
          age: "3",
          description: "Affectionate and social.",
          photo_url:
            "https://www.royalcanin.com/global/-/media/royal-canin-website/animal/cats/featured-images/scottish-fold-cat.ashx",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Maya",
          species: "cat",
          breed: "devon_rex",
          age: "1",
          description: "Playful and mischievous.",
          photo_url:
            "https://www.royalcanin.com/global/-/media/royal-canin-website/animal/cats/featured-images/devon-rex-cat.ashx",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Polly",
          species: "bird",
          breed: "parakeet",
          age: "1",
          description: "Chatty and loves to sing.",
          photo_url:
            "https://www.thesprucepets.com/thmb/Ng2pHL9IirP8NBNVZuc4wo9OU3A=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/gettyimages-1168661543-78862d6bcd70466b8db5e004a689001c.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Coco",
          species: "bird",
          breed: "cockatiel",
          age: "2",
          description: "Friendly and loves to whistle.",
          photo_url:
            "https://www.thesprucepets.com/thmb/yoJwL7RaOHatv74bH5Xgki1eLSI=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/cockatiel-1016791998-8d0538c1be87463fbe0474e7c13a8cf9.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Sunny",
          species: "bird",
          breed: "canary",
          age: "1",
          description: "Sings beautifully.",
          photo_url:
            "https://www.thesprucepets.com/thmb/CS1FsC2IV2nP9EK5D-AYktc9Cw0=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/canary-1020123148-58b157f15212468889e67f53d3cc4583f.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Bobby",
          species: "bird",
          breed: "lovebird",
          age: "1",
          description: "Affectionate and social.",
          photo_url:
            "https://www.thesprucepets.com/thmb/oe4edUURLOFTH2kFUXThYl9f2_c=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/lovebird-1139485851-f059e6d81dc446918e0285dc43a646b8.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Zazu",
          species: "bird",
          breed: "african_grey_parrot",
          age: "4",
          description: "Intelligent and loves to talk.",
          photo_url:
            "https://www.thesprucepets.com/thmb/jN1i9iAyNoAFk1DEReRbLkZpo7E=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/african-grey-parrot-1019822250-b48f3127a18b42909b8bbf7b39cb1c2f.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Tweety",
          species: "bird",
          breed: "budgerigar",
          age: "1",
          description: "Cheerful and loves to chirp.",
          photo_url:
            "https://www.thesprucepets.com/thmb/sD18uGe7eq67DSvwNAX8D59MfN0=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/budgerigar-1113809325-63c02eb57fd34ff7a4d10306fd8c1e5e.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Mango",
          species: "bird",
          breed: "macaw",
          age: "5",
          description: "Vibrant and loves to play.",
          photo_url:
            "https://www.thesprucepets.com/thmb/SINVI2zFozRTDFeauWXuEkFO_B0=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/macaw-1139465940-67ecdc4d8d8f42e0b837246d370b4958.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Chirpy",
          species: "bird",
          breed: "finch",
          age: "1",
          description: "Small and lively.",
          photo_url:
            "https://www.thesprucepets.com/thmb/nwtP4YFuF2zw-PHlsKN2cTUs7Ik=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/finch-1126779519-41da18ee1ec14fda8e64c24f90f1c097.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Pico",
          species: "bird",
          breed: "cockatoo",
          age: "2",
          description: "Loves to show off and dance.",
          photo_url:
            "https://www.thesprucepets.com/thmb/rsT34IbH6rHDC8ofH28vYYk9KD8=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/cockatoo-1088886334-b34f0bca27244f72b2ec3d9261e05b09.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Rico",
          species: "bird",
          breed: "eclectus_parrot",
          age: "3",
          description: "Beautiful and intelligent.",
          photo_url:
            "https://www.thesprucepets.com/thmb/Z4_5MDM-SyDPxFSZgTebap_N8w8=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/eclectus-parrot-1019822227-59b5f75cf48a4d9c926ae2d5cc94a091.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Thumper",
          species: "rabbit",
          breed: "holland_lop",
          age: "2",
          description: "Friendly and loves to hop around.",
          photo_url:
            "https://www.thesprucepets.com/thmb/nwDdT7R0sH5fEhiH-vTr1bClc_c=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/gettyimages-1088940904-70636ff4b0664a7a82f60e3e64993d86.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Bunbun",
          species: "rabbit",
          breed: "netherland_dwarf",
          age: "1",
          description: "Small and energetic.",
          photo_url:
            "https://www.thesprucepets.com/thmb/x8phAWUe1tf4RCwS2q7ng5Wbcyo=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/netherland-dwarf-rabbit-1141352563-65e860994d244636b43263ca9f486e5b.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Fluffy",
          species: "rabbit",
          breed: "angora",
          age: "2",
          description: "Fluffy and loves to be groomed.",
          photo_url:
            "https://www.thesprucepets.com/thmb/X6nvZpa5LSd9SjOc9B2WE_xfh7c=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/angora-rabbit-1139485441-2cc5db9d0ca84900998aa1b39f9b28a2.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Clover",
          species: "rabbit",
          breed: "mini_lop",
          age: "3",
          description: "Sweet and cuddly.",
          photo_url:
            "https://www.thesprucepets.com/thmb/ZzD2LHHIsJbxLIVeEYlH9s7afWE=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/mini-lop-rabbit-1141352563-906c0edb1b634cc6a7f2aa61e631fa5e.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Snowball",
          species: "rabbit",
          breed: "dutch",
          age: "1",
          description: "Gentle and sociable.",
          photo_url:
            "https://www.thesprucepets.com/thmb/CgUBcFL_pv0Sc0K8KrG1l4Ioe9U=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/dutch-rabbit-1113809325-5ac89e484074481682bd8ee71eac1c2d.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Binky",
          species: "rabbit",
          breed: "rex",
          age: "2",
          description: "Playful and friendly.",
          photo_url:
            "https://www.thesprucepets.com/thmb/lVRHTTYHD8BYIuDd2wsV4Ag80fI=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/rex-rabbit-1139485441-3bb89e97ef0646d59768cf3c9ca57426.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Pepper",
          species: "rabbit",
          breed: "english_spot",
          age: "2",
          description: "Energetic and loves to explore.",
          photo_url:
            "https://www.thesprucepets.com/thmb/nB5abvh2FZ3DccQtcgIja7HcB8M=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/english-spot-rabbit-1139485441-92ae5d4709ae4bb5a84e3c682a352cb3.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Dusty",
          species: "rabbit",
          breed: "new_zealand",
          age: "1",
          description: "Friendly and easy to train.",
          photo_url:
            "https://www.thesprucepets.com/thmb/8KiRErb7wLqFuUHWJbMIm1NOB8E=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/new-zealand-rabbit-1139485441-bbc3d37b5ed54b24a4572d92741e65be.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Cinnamon",
          species: "rabbit",
          breed: "lionhead",
          age: "2",
          description: "Fluffy and playful.",
          photo_url:
            "https://www.thesprucepets.com/thmb/xuPA8Y1GTH2AD0NmOfnyhiSMqDM=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/lionhead-rabbit-1139485441-4d867ed9230748e7a5367e6ee93b244c.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Flame",
          species: "rabbit",
          breed: "himalayan",
          age: "2",
          description: "Calm and enjoys being held.",
          photo_url:
            "https://www.thesprucepets.com/thmb/CgUBcFL_pv0Sc0K8KrG1l4Ioe9U=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/himalayan-rabbit-1139485441-84cc54cd9a054ecb87007ee9d84a1f3a.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Pebbles",
          species: "rabbit",
          breed: "angora",
          age: "1",
          description: "Cute and loves to snuggle.",
          photo_url:
            "https://www.thesprucepets.com/thmb/O_5eKOiVs7apdmgliv5blQXKc4Q=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/angora-rabbit-1139485441-e5a95ff7c13f44ecab7f9ae4f766458e.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Whiskers",
          species: "rabbit",
          breed: "flemish_giant",
          age: "2",
          description: "Large and gentle.",
          photo_url:
            "https://www.thesprucepets.com/thmb/mHlnH2GvhQ9WVuhrfD0Xk39uWEc=/1500x0/filters:no_upscale%2Cmax_bytes(150000):strip_icc/flemish-giant-rabbit-1139485441-6e4b428639324a5cb3a5e1ec6bd0940f.jpg",
          pet_status: "available",
          posted_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};
