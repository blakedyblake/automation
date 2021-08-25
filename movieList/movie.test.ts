import { Builder, Capabilities,By } from "selenium-webdriver";
import { beforeAll, afterAll, test } from "@jest/globals"

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async ()=>{
    await(await driver).get('http://127.0.0.1:5500/movieList/index.html')
})
afterAll(async ()=>{
    await(await driver).quit()
})

test("Add a movie to the site", async ()=>{
    let inputBar = await driver.findElement(By.xpath('/html/body/main/section/form/input'));

    await inputBar.sendKeys('Pirates of the Carribean\n')

    await driver.sleep(3000)
})

test('delete a movie', async()=> {
    let inputBar = await driver.findElement(By.xpath('/html/body/main/section/form/input'));

    let movieName: string = 'Batman Begins'
    await inputBar.sendKeys(`${movieName}\n`)

    
    let movieId = movieName.split(" ").join("") //The title with the spaces removed
    
    await driver.sleep(1000)

    await driver.findElement(By.id(`${movieId}`)).click()//Finds the delete button and delete what I just created

    await driver.sleep(3000)


})

test('Cross out a movie',async ()=>{
    let inputBar = await driver.findElement(By.xpath('/html/body/main/section/form/input'));

    let movieName: string = 'Joker'
    await inputBar.sendKeys(`${movieName}\n`)
    await driver.sleep(1000)
    
    await driver.findElement(By.xpath(`/html/body/main/ul/li[2]/span`)).click()//Will find the span to click on for crossing it out

    await driver.sleep(3000)

})

