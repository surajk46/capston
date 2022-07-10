const products = [
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 499,
    countInStock: 15,
  },

  {
    name: "pepe Jeans",
    imageUrl:
      "https://www.pepejeans.com/on/demandware.static/-/Library-Sites-pjg-content-global/default/dwc7db9c6c/images/homepage/highlights/2x/2206-sale-jeans-higlighted-categories-2x-woman.jpg",
    description:
      "Powerflex - Stylized 5 Pocket High Rise Skinny Fit, Hyper 60% Stretch Jeans, Dark Used With Heavy Faded , Zip Fly With 5 Belt Loops.",
    price: 593,
    countInStock: 5,
  },

  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },

 {
      
    "name": "Chocker",
    "imageUrl":
    "https://www.krishnajewellers.com/blog/wp-content/uploads/2021/07/RV_10-1100x734.jpg",
    "description":
    "Diamond is the most precious of all gemstones. It is called ‘Heera’ in Hindi. Classic, evergreen, and eternal, diamonds are perfect to bring just the needed touch of elegance to your special moments. Add a spark to your sparkle with our high-grade diamond.",
    "price": 337899,
    "countInStock": 8,

},
 {
      
  "name": "Shirt",
  "imageUrl":
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGRgZGBgaHBoYGBgYGBgYGBoaGhgaHBkcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHBISGjQrISw0NDQ0NDQ0NDQ0NDQ0NDQ0MT00NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQxNP/AABEIAPYAzQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBQYABwj/xAA/EAACAQIDBQUFBgUEAQUAAAABAgADEQQhMQUSQVFhBiJxgZETMqGx8AdCUnLB0RQjYoKSorLC4fEVM2Nz0v/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACMRAQEAAgICAgMBAQEAAAAAAAABAhEDEiExIkEEMnGBsVH/2gAMAwEAAhEDEQA/AMaIsUCKJUJaKItooEDrRYtotoCWnTiYJaUUG2MCysXX3WNyOROvlxleMzw0HymtYiVDbJLOxSwBOnK/6azNsnmtYy3xFPZtBf8AeXWB2DVdd69jwFiWPgBx+HpLzZOwlU3fMzW0AALAWA5Twy5fPh0Y8HjeTzbaWxnQXfI7oJvwuLC5HW/oZW1aKqQOPqPWek7bw5dStr9La2z/AEmJxmx3pjedSF0F7HwBsZceTftM+Gz16VeQy0sPr9JI2eGFWnvKRfTeBF+6cxfXX4y82FstXY1HsURgRcA3YaDPK1ueWnOabalFGUsVIZQrAsVO9qAwKkrnmMjlpoZbyyZSJjw243LajtOtCtEtPdzhtOhxLSACIhhwTKBtBIhxIAETiIREG0AhFtOAi2gcBCAiRRA60RjCJjTGAhaAzwWaR6lS0B1nj2AqDfAPHLzGY/WU9XFSP/FkEG+huPETOU3NNYZdbK9EoyU2JRBd3Cj1PoMzMjsrbD1mWiDuu+QfIgHM5jwBlxiOzj0SKp/n5gMD7wPAqCbH4Gclx1dV3TPtN4rxMUj+5cjmRb4RcfgkemykaiRNkUnZt903BYBE6a7zdflb1tcS2RtM3xW55mmb7MP7P2tE567uWRuSGHwU+cf7XVzTpgADeJQm2VkVwxa3kB1u56SvxLEOzgnLPTMXy04jI+oiYYe0p3YZkkNe5J4Zk5nK0v32Zn63E3aDaXmA2GlTD76VbOnddHFxl7rBhmFItqDnccJT1KZUlWFiCQRyI1nbLubfPssuqbInRYhlQJEEwzEMADEtDIiQBIg2hmJIFAi2nRbShJ0W04wBMZcx5oxUgRq72lVia8l4ppXexd3VEUszGyqouSTwAkEd6hjZM9V2H9nVNAGxTb7kA7imyL0JBux4XyHQ5GarD7Bw6gBaCCxuqqijMaE5fE5y9Tbw/Y+IanVRwCQGF+Vr2Oc9nZ7pcsALZkm3C9zeZTt/skqRUNtdAMh/3M9W2riKqKjMwC3I3Vuzbo4jjpwtPHk492adHDyTGXbaNtNUP8xgF4P93pf8PyjmNxQKjdORGosfTnMvgqYfOowKge8SSbZacB8ehEk1KYRu4CqHPcGinXIcL/P4+Fxk8OntfdBtLEWBz005/HxMLs5c0vFifLID4ASoxAas4ppfPU591b2J4azX4PCKiBF4CTLUx0mO7lv6Hgi6PvIN7fUoycHV8gPG9iDz84fa3Zfs3V1zQqqE/wBaLuj1Vb+Rl52cwBJFRhkMk6toW8B8/Ay+xuzkrUyj+6ePEEZgjwtOjgxvXz/jm/JyxuWp/ryO060vNsdm6tEkgb6fiUZj8y/qPhKSe2ngG0EiHaIRAAiJaGYkASIMJoNoBARROEKAlp1oQnQG2EjVhJjCFhdnvVJC6AXZjoq8z1OgGpPmQELZ2xHxDgAWTesz9PvbvM28p6JsTYlKk6lKarna4HeI6sczzzPAQNh4H2aIB+C/iSxJ+UvqC2IPj+83Jpk6q3Yk88pIRQM5Hw7XHpJCm5mWkXaGASotnF5n8b2aAVamHRfaU23lDZK6kEMhI0uCR5zVONYO77sDxzbGymUislN1QAe0pjMUnBNzYaI2oNrXVxkABIn/AKm9QhKV2Y5ZZ2vz6T2GpgaTViWXMqCCHdTcMd73SNLpbxMrK2x6VB2FNFG8N64ABuSeWmh09OE8eWanZ78N3eu2JweyHw/ebMtYsZs9l7NDlWc7qcB958r2HLTU9bSz2JhlqM4dbqgSx/qbeJ9AF/ylvWpIAFVQSDvZknMczmc9POefHxdvlk9OXm6/HF2Ho34BRaw4ADgAOVo47Z5aDT95xq93I5ngRYrzEbtOpyFBF7MLgiZzbvZRHu9IhW1/pPj+/wA5ooNrZ/8AiE08lxmEem5R13WHoRzB4iR56rtTZtOuu6658OBB/pbgek882zsl6D2Nyh91rW/tPJvnrzssVWERLQjEMgAwYTQYBXhCJaEBA4RRFtCVLkAak2A6mA/gME1Vt1cgM2Y6IvM/oOJmuwmBRKCKgPfcMS2ZNiN0m3QA24XijZ/sE9jxK33hlvNoT5cOktGp5KBotrdLTUmmSpSATLgD6HP94qPZCeTfC316Rd+xy5acxxEYDqA4JAU8TlYHMHyJOXjKHsG+bePw4SajZyl2JW30D8wPlLRGkrSS+k6cNJyyCFtE7tnzyI0BOTEDQcM7+UDbRBdbC+8oFuZ3jYeJvLCrTuM/oSE9AtWw6kaFifBLOPiPjMck3NNcd1d/1Y4LAbi7obq1uJOV/hbyhtYE2+rSQ5C3I1sM/C9v9x9ZCvNSammd7u6MmITOicZQcacx3hGkUk5eUBUpEm0h7bwgdGS+TCxOveGat5ECWxG6N0a8T+kh4k5QPI6tMqxUixUkHoQbH4wDLftJQ3K7W+8qv65fNTKkiShsidaERBtAIRROtOJgLNZsHZoQKzgEVQhVwPdORKE8Lg5aZg9L44m5AFzflmethznpmyMKPZqqg7pUXRhkRl7rLex4jlbhYWsSpu1cNvrflmDxHWRqLkrnqNZKNVk7rXYcD96w5jQkcba6jlIleqgudAemXkZpBV3BHIjMHhfr0mW7S7cSlTvvbpc7uYLFSAd8WXwtmLac7yq7U9rVpXp0mDv6qniefT5TznE4x3N3Zm11N7X1tM3LTUj3DsQwbDowNxnY55i+Wsu3NmlB9nqgYamB+BD/AJICfiTNFjKehlS+zqNlDkWg8lAyKeVL5ePyt+sHDUT7TfP3U3R1Ltc/BB/lFpPa5sdP1FpKpDK/O5Hhw+FoDOLfQDjGUXjCr5tEAhIUmcoiH6+vSKPCFK+lo7QAUX46DzjTZ2il/wDqApbOMV48iDM8YxWMDBdsUtVQ86Y+FSp+4meM03bUd+l/9fzdpmjJfYAwTDMSARjFRo85kHEvAmbEG/iaSEgAvc3NrqoLMAQb3KqQDwJE9hwgACgZBRaw49Sec+d620GR1dTZkYMviDf0nsWz+1OH9mj1KygsqsFF2bMD7q3ItpLLNJZbfDX16YdbHyPEHgRMV2rCUqbNWptUVVuxQ2FgQM1ZgQCSMu9463tR2von3EqN1sq/8pke3O30rYZ0COhO7rYg2dSQbZjTlMzkx3rb0vFnJux5XiKm8zNa28zGw0FyTb4xuONTgESMvZvs4xN6FMX+4B/iWW3+mbh1uJ5L9mmNIsh032UeYDD5tPXKTZT0npmq8LumS6RvExFPjG6ZsYRKINiQcwDb83AetpNKAAD8IsPDL9hIZfIdWH+nvfNRCq4jIyBlzmYW9I97x1IaOXigwLxVMBS0BDl9aftOc52hpa8A+EYcR5zGkzgYfty389AOFFPi7zMmXvbJ74px+FUUeSg/MmURkoQwYpgGB1Qysxr5GWVSVmOGRgjOYls5K2RV3X8ZExAzh4UZ3ExlNzTeF65SvRMA2XQyHtxLqw6H69YOyMVvrb6+v2k7HUt5CeNvO0458cn0r8sGKq0LCV1ZbS9xIylJiNZ2vltt2Apb9DEbvv03p1F55Brjz3SJ6zsrFB0VwciAfWec/ZFh+5iKn4mRLdFBY/7pr9iv7Kq9A+7csn5Wzt5G4m56ZrSuLiRXWxksQKqSoTDC973yF8uvLr3T6wcSlgOR56yVgDmw6L83i4saSCqNxDWpJZpxmph+UNOV4pYRuk3MZw3AlAlreeUcWQ2e7qPzH0sP+Un0xaKCC5RVGdpztwjbGys3JWPoCZB5j2gq7+Jqtzc28LCVhkjHPvVHPN2+eUjmSshMEiGYkNOcStxaS0IkTEpCRlcXTiYQSfj6UhYcWMjS92fU3HB4H5/XyM1CPdZlsOlxbjqPEaTQ7NfeANtfq311nNzY6u3Z+Pnudao9s4fcY8mFx48RM3iRPRNp4D2iW0Ivumef41CCQRYg2I6z04s+2Onlz4dct/VeqfZLRthHb8Vd7eARB8wZotuYZhu1kHeTXqvH95R/ZQ4/grf/ACv/AMT+s3NRARae89Oa+zWAxSugYcRJYF5nsMhw9QofcbNenMS+U8RKh/DZFv7fhf8AeN4p9BH6I7pNrm+npExK2MghByIQcWhul41uQ0bdeMUZx32cAqRKyg0h/MI4qq/6if2Es6YlYygVyRq1NPAhGf49+WSHTKK0ccRjFG1N/wAjfIyQTIW06lqT/lPyv8hJErycxLQgIhkUJgxWMAwHRGayx0RHECmxtO4lQFsZocSkpqyWMgsMC2k0uxGHfWw3veHhcb1vMk+YmSwby7wOKKMrjUH4HIj0Pwnnnj2xenFl1ylakLnunlKfa+xKVQkshB5qbH9j5gy0SpvWbnJ1MA5N9X0nJNy7jvurNWKv7MkalUxOHFzTG44JyILXXPxCj/Geii/OU+wsIEVm3bFyDnrujJfhc+Zk2oxBuJ9DDfWbfMz12uvSVi8KKiWOozB5GRMDiSrezfUaHnLHDvcAyHj8MH1yOoI1B5zTKzoVLZc4dZryowGJJO4/vDLxHOW7Ll5XihkrOMC5ENXMi7Kog1FFoamDVxCL7zqv5mA+cIq8Bj6dZTut31PeU6rmbZcstZORD+If4n/9Su2bTpFnqUbMHaxIItvISDbrmZdootncfKUNbh6fKVPadguGqZ5lbeuVvjLbE0iRbXzteeZ9paje3dDfdU5AsxGgzAJsL9JBUEwSYUEiRoBiQiJ0BRFIgCGIESusqcUku6gldiUhIrqTWMn0quUrahtFStlIrb9n65qKynVT8xe/wmo2NRUkuwvawAOYVjm1xx4ZHmelvKaG1HpHeQ5nIjn08f3npPZjAVQiPUXcYszbgYndBUDvDTf3gT0vbnPPHi+e/p75c28NS+Wx9odT8o0xuY4jG2kU24gidDlOUGsLR0kGRxbgYqtCom0aBALDkdOVjL1SCA9syo+Ocqca/ce4v3G+RlkjhES+u6otxJsJKQy5Avc84z7Z29xcvxNkvkNW+A6xSu8bv5DgP3MMvygCKN/fYt0HdX/EG5HiTEdQosoA5AADPyh3OkodsbaalVCIEO6t23gTmeGRFsvHWTLKYzdXHG5XUaHB4ZUUKoAGegtmTcnxJJPnJl8pT7L29TewcbjdTdCejcPO0tqpkxymXmLljljdWK7arui7yWLcAc1v/Vbh11yteYftbid8oGTccbxYXDCxtmCOFwdbTWbb2rTpAGpfMmyr7zEC9hyGgJ4XnnOPxbVXZ31J04KOCjoBLb4SIxgmFBvIpIMUmITA4GEDBAhAQBcSFiEk8yNWWBQYtLSAaljLrGU8pSYhLG8itL2EwQrYkFgSKalwLXBfRL8rXJ/tnsuGw5VFW3uqBcnMm1rmYzsBtHBLSSnQstZgN5andd2tmVbRhyAOQ4azbI54n68JvGeGKeAHEek4JyPrOBi2lQLJ0EG0dBMXdvwgNlAVZToRu/5ZfrLCohClj7x/0g8Iz7DdUn7ws2th3SGIJOgNrE9ekPDOj01NMgo6hlIzDBu8GvxvcGSqjloUUjOKIDGMxC00Z20UX8ToB4k2EwqkuzOxuWJJ+vG0tu1OO3nFFTkmbdXI08gfieUrqK7ouePp9aTk5893rHf+Ph1na/YsU26uUjYTtdUw7BLe0Qn3GNiovmUbgLfdOXhI208UFU3Mqsds96TIanv1ED2/ACxAXxyz6zPDLbuLz5YzHVWG3dq/xNXftYBQoB1GpPxJ9BIMBYRnW+eRjBikRLw0ExIs6AIhAwRCtAONOscECoYFdiElNiVF7S4x9cIvU6Dmf2lCxJNzxlkS1wM9Q7Cdr/alcNiXvU0p1G1fkjH8f4W+9oc7b3l4EMSo+i/ZxQJhuw3bQVN3DYpwKmiVWIAfgEcnR9AGPvaHvWLbxlIyP15Rs07enO5UC2bt7o5DixHIfqOcKglz0mZ7c7c/g6buH/nVR7OiNNxQO+9v6b5HmVikZz7Ru1ZYtg6Ld0d2u6n32GtIH8I+9zOWgIN19lO1jUw74dj3qDDdvr7NySo/tYOOg3Z4+KnX9b+N5rPs32iKWOQE92qrUjyu1mQ/5oo/ukHtOIXjIG1caKNJn4jJRzc6fv5S0dbi31fhMT2hxPtagpoe4mpHFzqBztkPHemc8uuO3px4dspFRhqZJLtfMkknieJiYvEgAxa2Iy3RkB+kTYuyjiah37+yT3+G8eCA9ePIeInFjjc8tPo5ZTDHdP8AZrY5qMMTVHcU3pqfvsD75H4QdOZz4CJ243A1EffKuf7FIGf9zZeBm0xLpTRndglNFuxyCqq6AD0AA6CeM4vbpxWNaqQVVlKIptdUW5UG3E5k9WM7scZjjqPm55XPLdT0EUzhEhCRIUEmAhEScTOgIIoEEQhAW8YrVAASTkBc+EcdpSbZxX3B4t+g/X0gQcViC7E+g5CNWgiGJpks4mJeITAK82vZf7QKtALTxAatSFgDf+ai8lY++o/C3kRpMOTEJgfSGxto0cRT38PUV142yZeQZTmp6EcZ4h9oW1v4jG1M7pTPskHCyEhiPFt4+kocLi3puHpu6ONHRirDzEj1XJJJJJJuSdSTmSTzkWADWPSTKFZlIdGsVIZTrZlN1OfEEAxrCYR6rhEUsx4DlxJPAdTPQuznZhKNmqANU52uq/lB+fynnnyTF64cVy9LvtH24qbtA0kZVqUw7kix3nGaKToy2PI5i14zgsbSenvo2gJYaEEa5ctPWWLYVHUq6hlOoYXH11mL2vsl6DF6JJXM21I45gZsNcxn01J57lM/ft1Y43j9TcWtdt7dXfVN4gbzsFRb6szHIAC58pcVe22AwlMUcPv4hlGqdxGbizVGGdz+EGeabS2qayBWvdTwtunx4yuE9+HDrPPtz8/J2vj0ve0/arEYwgPupTU3WmlwgP4mJzZup8gLmU+zmtVT8wHrl+sZcREazA8iD6GeznbW8SKYMy0S8EwjEMATBhxIAgzmeCzRl3hNBxWJCKWPAaczwEzbsSSTqTc+MlbTxG826NF16t/1+8iCWKIRbxBOJlZcTBvEJnXgKTGyZxM5FLEAcZLdLJv0WmhY2AjTanzmnTZ4pJvHXdJPjK/s5ss16tiRuqN434ngMuZGs8Zy9rf/ACOi8Nx1PutH2O2caaGs2TNz4JqB56+k0mxccMQzMvu3sttCBxmS7UbXyGGoneJ7rEdcgotxPH/uans/SXD0VUkAhczzJzb4kzwzlvyv26sNT4z6/wCrrEOEFhymU2/jd1WPIE+fAeZtLvFV7jevkcr9PozDdp64sFvmWuR0Fz8yvpJhjvKQ5MuuNrPjrrz684YEbvDUzvfOCRAaOtGmhltEe4B5gH1F4t5HwDXpJ+RfkI8TMtOMEziYJMDjEi3iQGWMh46ruoSNeHjpOnQKGEs6dNAoLGdOhkMFjOnQ0Fpadn6Aeot+c6dPDnvxr2/Hnyi+7TPkwHID1v8AvMpTqMt91mFxY7rFbjllwnTp5cH63+vX8n9p/Gh7IbNG81ZrHcyUcjz+uZmqZFKmowuASAvUak+uUWdM5/tXrxTWMR8WrhN5my3PaBV0VLAjX3nzHIDrbPz7EYjfYuRa50vew5XOvj4xZ09eD7eH5N8Q3CWdOnQ5hNGmnTpWWn2V/wCyngf9xkudOmWgmJOnQEMSdOgf/9k=",
  "description":
  "This clean, classic collar style is defined by a band of about an 1” that stands around the neck with no spreads or points. It can be paired with both formal or casual shirts. ",
  "price": 899,
  "countInStock": 10,

},
{
      
  "name": "Navy Blue denim",
  "imageUrl":
  "https://n1.sdlcdn.com/imgs/k/h/b/Coutume-Collections-Denim-Lycra-Jeans-SDL556087067-1-d53fe.jpg",
  "description":
  "explore the extensive collection of 26 jeans in rugged textures and stylish timeless designs to stay trendy and classy altogether. discover the latest selection of new season trends of jeans made of good quality denim materials starting at ₹599 prices.",
  "price": 899,
  "countInStock": 10,

},
{
      
  "name": "Women Handbags Combo",
  "imageUrl": "https://m.media-amazon.com/images/I/714z3SL2C5L._UX625_.jpg",
  "description":
  "Latest handbags combo set design by Mammon This sets includes 1 shoulder bag 1 sling bag 1 hand clutch and 1 ladies purse wallet for coins. This sets can be a best gift ideas for girls women mother.",
  "price": 799,
  "countInStock": 15,

},
{
      
  "name": "Sherwani",
  "imageUrl": "https://static01.manyavar.com/uploads/dealimages/13842/listimages/plush-cream-color-sherwani-suit-odes928-302-2.jpg",
  "description":"The regal rani sherwani set is an outlandish ensemble that takes inspriration from the nineteenth century Indian high fashion era. Featuring sublte mirror work, beautifully enmeshed with floral embroidery, this gorgeous sherwani is perfect for the modern groom. Take pride in every step you take in this ceremonial avatar complete with a matching dupatta, and inspire your peers with your distinctive taste.",
  "price": 1599,
  "countInStock": 12,

},

{
      
  "name": "Glam Up makeup kit",
  "imageUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-index-makeup-essentials-1645556621.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
  "description":"Makeup trends come and go, but some products can stand the test of time. Whether it’s an all-time favorite designer lipstick or a can’t-live-without mascara, we all have beauty bag staples we’ve fallen in love with over and over again. The ELLE team was very vocal about their favorite makeup products of all time. The lineup ranges from a pore-erasing primer to a skinny brown pencil that fakes fuller arches, and so many other greats in between. Shop the absolute best of the best, ahead.",
  "price": 3579,
  "countInStock": 18,

},


{
      
  "name": "Yellow Embroidered Designer Silk Saree ",
  "imageUrl": "https://poduga.com/wp-content/uploads/2022/01/SUL-6612.jpg",
  "description":"Yellow Embroidered Designer Silk Saree In usa uk canada Shop Latest Indian Saree Collection Of Yellow Embroidered Designer Silk Saree Online In Australia, Newzeland. This saree has unique and intricate resham, zari and sequence embroidery detail with floral motifs all over pallu and daman on heavy silk fabric paired with equally embellished subtle silk blouse. Style this saree on desi events with heels and jewellery to look like a diva.",
  "price": 1110,
  "countInStock": 8,

},

{
      
  "name": "Layers Party Dress -Navy Multi  ",
  "imageUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/2/82a0b19PCF25_1.jpg?rnd=20200526195200",
  "description":"Pink Chick is a Premium Fashion Brand that loves dressing up Girls Aged 6 months to 12 years. A perfect combination of fashion & convenience. We call it, ‘Affordable Luxury’.",
  "price": 1800,
  "countInStock": 6,

},

 {
      
  "name": "Aztec Queen Bed with One Drawer (Left, Moonshine White Finish)",
  "imageUrl": "https://cdn.shopify.com/s/files/1/0532/1251/2424/products/AZ-Qlyfstylefinal-min_1024x1024.jpg?v=1645795298",
  "description":"Bed Material: Engineered Wood W x H x D: 156 cm x 90 cm x 203 cm (5 ft 1 in x 2 ft 11 in x 6 ft 7 in) 1 Drawer.",
  "price": 23000,
  "countInStock": 7,

},

{
      
  "name": "Recliner RX5 - Ultra Plush Recliner",
  "imageUrl": "https://mysleepyhead.com/media/catalog/product/cache/208fb0ae1c70eca4ffa059c65c5c5342/s/l/sleepyhead_rx5_recliner_turkish_brown_1_3_1.jpg",
  "description":"Choose your level of recline with a manually operated lever. With layers of ultra-soft cushioning wrapped in premium fabric, the RX5 Recliner is the ultimate definition of comfort.",
  "price": 15000,
  "countInStock": 9,

},

{
      
  "name": "ear buds",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_angY5DEEirgfiRdz_FDzVOkU3QhXH0F1Q&usqp=CAU",
  "description":"The best truly wireless earbuds offer a nice refuge from untangling pesky wired headphones without compromising sound quality. Drown out the sounds of the world around you with some of our favorite wireless earbuds.",
  "price": 1390,
  "countInStock": 10,

},

 {
      
  "name": "Microwiew Oven(OTG)",
  "imageUrl": "https://th.sharp/sites/default/files/uploads/2021-08/3%20Things%20Everyone%20Gets%20Wrong%20About%20Microwave%20Oven.jpg",
  "description":"This message was once spread widely by online healthy eating communities. It’s not totally wrong, but it’s somehow misleading. Nutrients will be broken down into pieces when exposed to heat regardless of the source. Cooking food with water or any liquid will cause nutrients to leach out of the foods as well.",

 
  "price": 7680,
  "countInStock": 10,

},
 {
      
  "name": "Pigeon by Stovekraft Aluminium Hard Anodized Pressure Cooker Combo with Induction Base Inner Lid - 2 L, 3 L, 5 L- 14455 (Silver)",
  "imageUrl": "https://m.media-amazon.com/images/I/51ew1Bsa5nL._SX569_.jpg",
  "description":"Made from High Grade Vargin Aluminium Conforming to IS 21:1992 .Ergonomic User Friendly handle .Sturdy Hard Anodised Body .Precision Weight Valve. Metallic Safety Plug",

 
  "price": 680,
  "countInStock": 10,

},

 {
      
  "name": "Auspicious Sky Blue Plain Pure Cotton Salwar Suits With Organza Silk Dupatta",
  "imageUrl": "https://www.pinksaree.com/wp-content/uploads/2021/01/Turquoise-Plain-Pure-Cotton-Salwar-Suits-With-Organza-Silk-Dupatta-5.jpg",
  "description":"Product Care Instructions: Dry Clean Only.There Might Be Minor Colour Variation Between Actual Product And Image Shown On Screen Due To Lighting On The Photography.",

 
  "price": 1499,
  "countInStock": 8,

},

 {
      
  "name": "Classic 250ml (Set of 6) Coffee Mug",
  "imageUrl": "https://ii1.pepperfry.com/media/catalog/product/c/d/800x880/cdi-black-matt-finish-coffee-mugs---set-of-6--cdi-black-matt-finish-coffee-mugs---set-of-6--2i0e7h.jpg",
  "description":"Affordable style just got easier. The Mug set has got all your dining needs covered. Crafted from stoneware, this set of 6 solid black glazed mugs makes sure you always serve design.",

 
  "price": 659,
  "countInStock": 12,

},
 {
      
  "name": "Ferrero Rocher Fine Hazelnut Chocolates",
  "imageUrl": "https://m.media-amazon.com/images/I/913lCvAq-lL._SY879_.jpg",
  "description":"48 delicious Ferrero Rocher chocolates, presented in an impressive transparent gift box.A tempting combination of smooth chocolaty cream surrounding a whole hazelnut within a delicate, crisp wafer all enveloped in milk chocolate and finely chopped hazelnuts.A deliciously elegant confection, wrapped in glittery gold foil, loved, gifted, and appreciated all over the world.Certified Kosher (OU-dairy), Peanut free",

 
  "price": 889,
  "countInStock": 18,

},

{
      
  "name": "Miss Dior Eau de Parfum",
  "imageUrl": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1637201505-y0996347-c099600764-e01-zhc-1637201482.jpg?crop=0.536xw:1.00xh;0.213xw,0&resize=480:*",
  "description":"Dior perfumes are so iconic, they even inspired a documentary. This modern classic truly has a bit of everything: juicy blood orange and mandarin, fresh lily of the valley, and earthy patchouli.",

 
  "price": 756,
  "countInStock": 6,

},


















  
];

module.exports = products;
