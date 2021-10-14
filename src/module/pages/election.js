import React from 'react';
import { Pages } from "../pages.js";
import { Grid, Button, Ref, Segment, Menu, Embed, Accordion, Icon, List, Table, Tab, Image } from 'semantic-ui-react';
import vote1 from "../../imgs/vote3-1.jpg"
import vote2 from "../../imgs/vote3-2.jpg"
import vote3 from "../../imgs/vote5.jpg"
import vote4 from "../../imgs/vote6.jpg"
import time1 from "../../imgs/time1.jpg"
import time2 from "../../imgs/time2.jpg"
import time3 from "../../imgs/time3.jpg"
import time4 from "../../imgs/time4.jpg"
import time5 from "../../imgs/time5.jpg"
import time6 from "../../imgs/time6.jpg"
import time7 from "../../imgs/time7.jpg"
import ele from "../../imgs/election.jpg"
import "tailwindcss/tailwind.css"



class Election extends React.Component {
    constructor(props) {
        super(props)
        this.voteRef = React.createRef();
        this.QARef = React.createRef();
        this.thingRef = React.createRef();
        this.searchRef = React.createRef();
        this.state = {
            qa: [{ title: "選舉前幾天不能宣傳嗎?為甚麼?會有甚麼後果?", content: "投票日不可從事競選或助選活動：1.不可從事競選或助選活動(包含用簡訊或LINE等通訊軟體進行拉票)，違反者，處新臺幣50萬元以上5百萬元以下罰鍰，經制止不聽者，按次連續處罰。2.不可於投票所四周30公尺內喧嚷或干擾勸誘他人投票或不投票，經警衛人員制止後仍繼續為之者，處1年以下有期徒刑、拘役或科新臺幣1萬5千以下罰金。" },
            { title: "身心障礙者可否由家屬協助投票?", content: "選舉人如因身心障礙不能自行圈投，而能表示其意思者，得依其請求，由家屬1人在場，依據本人意思，眼同協助或代為圈投；如當事人無法表示其意思，則不適用上開規定。" },
            { title: "我去投票所排隊的時候，下午四點到了，還能投票嗎?", content: "只要您在投票時間截止前到達投票所前排隊領票，仍可投票。" },
            { title: "不小心圈選於圈選欄之外的選票是否有效?", content: "選票圈選欄為3公分＊2.5公分之空白欄位，圈選工具之印文直徑則為1公分，是以選舉人在正常圈選之情況下，圈印印文應不致跨出欄外，但如不小心蓋出欄外，只要所蓋印文蓋於欄格線，仍可辨別圈選何候選人時，仍將被認定為有效票。" },
            { title: "投票的時候，我不小心蓋錯選票，我該怎麼辦?可以重新領票再投嗎?", content: "投票的時候，不小心蓋錯選票，無法重新領票再投。請選舉人於投票時應審慎圈選，若不小心蓋錯選票，仍請投入票匭，請勿撕毀選票，或將選票攜出。若有違反者，撕毀選舉票，將處新臺幣5千 元以上5萬元以下罰鍰；攜出選舉票，將處1年以下有期徒刑、拘役或科新臺幣1萬5千元以下罰金。（總統副總統選舉罷免法第93條第1項、第96條第8項；公職人員選舉罷免法第108條第1項、第110條第8項）" },
            { title: "甚麼時候會收到選舉公報?", content: "各鄉(鎮、市、區)公所會在投票日2日前將選舉公報送達選舉區內各戶。" },
            { title: "我沒收到投票通知單，怎麼辦?", content: "投票通知單由戶政機關依據確定之選舉人名冊填造，送由鄉（鎮、市、區）公所於投票日2日前分送選舉區內各戶。屆時選舉人如未收到，可逕向戶籍地鄉（鎮、市、區）公所洽詢。" },

            ], activeIndex: 0,
            note: ["公告全國性公民投票案第20案投票日期、投票起、止時間、編號、主文、理由書、政府機關針對公民投票案提出之意見書、公民投票權行使範圍及方式、正反意見支持代表於全國性無線電視頻道發表意見或進行辯論之辦理期間與應遵行之事項等事項", "中選會提醒有意參加公投意見發表會或辯論會者，請在6月4日前申請許可設立辦事處並完成報名", "公告全國性公民投票案第19案投票日期、投票起、止時間、編號、主文、理由書、政府機關針對公民投票案提出之意見書、公民投票權行使範圍及方式、正反意見支持代表於全國性無線電視頻道發表意見或進行辯論之辦理期間與應遵行之事項等事項"]
        }


    }

    componentDidMount() {
        let tabsContainer = document.querySelector("#tabs");

        let tabTogglers = tabsContainer.querySelectorAll("a");
        console.log(tabTogglers);

        tabTogglers.forEach(function (toggler) {
            toggler.addEventListener("click", function (e) {
                e.preventDefault();

                let tabName = this.getAttribute("href");
                console.log(tabName)
                let tabContents = document.querySelector("#tab-contents");

                for (let i = 0; i < tabContents.children.length; i++) {

                    tabTogglers[i].parentElement.classList.remove("border-red-600", "bg-white", "border-b", "-mb-px", "opacity-100");
                    tabContents.children[i].classList.remove("hidden");
                    if ("#" + tabContents.children[i].id === tabName) {
                        continue;
                    }
                    tabContents.children[i].classList.add("hidden");

                }
                e.target.parentElement.classList.add("border-red-600", "bg-white", "border-b-4", "-mb-px", "opacity-100");
            });
        });

        document.getElementById("default-tab").click();
    }
    // toVote = () => {

    //     this.voteRef.current.scrollIntoView({ behavior: 'smooth' })
    // }
    // toQa = () => {
    //     this.QARef.current.scrollIntoView({ behavior: 'smooth' })
    // }
    // toSearch = () => {
    //     this.searchRef.current.scrollIntoView({ behavior: 'smooth' })
    // }
    // toThing = () => {
    //     this.thingRef.current.scrollIntoView({ behavior: 'smooth' })
    // }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }





    render() {
        const rate = 3
        const { activeIndex } = this.state
        const panes1 = [
            {
                menuItem: '投票流程教學', render: () =>
                    <Tab.Pane>
                        <Embed id='uZp4P70H6E8' /*placeholder='/images/image-16by9.png'*/ source='youtube' />
                    </Tab.Pane>
            },
            {
                menuItem: '投票三口訣', render: () =>
                    <Tab.Pane>
                        <Image src={vote1} size='huge' centered />
                    </Tab.Pane>
            },
            {
                menuItem: '投票三寶', render: () =>
                    <Tab.Pane>
                        <Image src={vote2} size='huge' centered />
                    </Tab.Pane>
            },
            {
                menuItem: '投票這五步', render: () =>
                    <Tab.Pane>
                        <Image src={vote3} size='large' centered />
                    </Tab.Pane>
            },
            {
                menuItem: '投票這六不', render: () =>
                    <Tab.Pane>
                        <Image src={vote4} size='large' centered />
                    </Tab.Pane>
            },
        ]
        return (<Pages id={1} class="p-0" pageInfo={[{ content: '選舉報你知', active: true, href: "./#/election" }]} page={
            (<>
                {/* <Menu secondary>
                    <Menu.Item
                        name='投票要點'

                        onClick={ this.toVote }
                    />
                    <Menu.Item
                        name='QA大集合'

                        onClick={ this.toQa }
                    />
                    <Menu.Item
                        name='民主大事紀'

                        onClick={ this.toThing }
                    />

                </Menu> */}
                <div class="flex justify-center "> <img class="w-3/5" src={ele}></img></div>               
                <div class="w-full  mt-4  rounded">
                    {/* <!-- Tabs --> */}
                    <ul id="tabs" class="flex justify-center ">
                        <li class="px-8 py-2 -mb-px font-semibold bg-white  border-b-2 border-red-600 rounded-t opacity-50"><a class="text-gray-700 hover:text-red-600 focus:text-red-600" id="default-tab" href="#first">選舉公告</a></li>
                        <li class="px-8 py-2 font-semibold bg-white  rounded-t opacity-50"><a class="text-gray-700 hover:text-red-600 focus:text-red-600" href="#second">投票要點</a></li>
                        <li class="px-8 py-2 font-semibold bg-white  rounded-t opacity-50"><a class="text-gray-700 hover:text-red-600 focus:text-red-600" href="#third">QA大集合</a></li>
                        <li class="px-8 py-2 font-semibold bg-white  rounded-t opacity-50"><a class="text-gray-700 hover:text-red-600 focus:text-red-600" href="#fourth">民主大事紀</a></li>
                    </ul>

                    {/* <!-- Tab Contents --> */}
                    <div id="tab-contents" class="bg-white w-full">
                        <div id="first" class="p-4">
                            <Grid><Grid.Row>
                                <Grid.Column width={16} >
                                    <div class="p-4 px-24 rounded-md" >
                                        <h1 class="flex justify-center text-5xl mb-12">選舉公告</h1>
                                        <List class="py-2 text-xl" animated divided>
                                            {this.state.note.map((item, index) => {
                                                return (<List.Item class="my-2" icon={"bullhorn"} content={item} />)
                                            })}
                                        </List>
                                        <p>
                                            <button class="float-right bg-red-600 hover:bg-red-800 text-white text-2xl font-semibold rounded-md px-4 py-2 m-2 mb-4" >看更多</button>
                                        </p>
                                    </div>
                                </Grid.Column>
                            </Grid.Row></Grid>
                        </div>

                        <div id="second" class="hidden p-4">
                            <Grid><Grid.Row>
                                {/* <Grid.Column width={ rate } computer={ rate } mobile={ 16 }>
                            
                                            <Button color={ "teal" } variant="secondary" size="lg" disabled >投票要點</Button>
                                        
                                    </Grid.Column> */}
                                <Grid.Column width={16}>
                                    <div class="p-4 rounded-md">
                                        <Ref innerRef={this.voteRef}><h1 class="flex justify-center text-5xl mb-12">投票要點</h1></Ref>
                                        <Tab class="text-xl" panes={panes1} />
                                    </div>
                                </Grid.Column>
                            </Grid.Row></Grid>
                        </div>

                        <div id="third" class="hidden p-4">
                            <Grid><Grid.Row>
                                {/* <Grid.Column width={ rate } computer={ rate } mobile={ 16 }>
                                
                                            <Button color={ "teal" } variant="secondary" size="lg" disabled >QA大集合</Button>
                                        
                                    </Grid.Column> */}

                                <Grid.Column width={16}  >
                                    <div class="p-4 px-24 rounded-md">
                                        <Ref innerRef={this.QARef}>
                                            <h1 class="flex justify-center text-5xl mb-12">Q & A 大集合</h1>
                                        </Ref>
                                        {this.state.qa.map((item, index) => {
                                            return (<>
                                            <div class="bg-red-50  p-6 py-0 flex items-center space-x-6 rounded-lg hover:scale-105 transition transform duration-500">
                                                <div class="h-20 w-20 inline-block align-middle py-1 text-red-600 text-6xl font-semibold">Q.
                                                    {/* <img src={Q}></img> */}
                                                </div>
                                                <div class="w-full">
                                                    <p class="text-3xl font-bold">{item.title}</p>                                    
                                                </div>
                                            </div>
                                            <div class="p-6 py-0 mb-12 bg-white flex items-center space-x-6 rounded-lg">
                                                <div  class="h-20 w-20 inline-block align-middle py-1 text-gray-700 text-6xl font-semibold">A.
                                                    {/* <img src={Q}></img> */}
                                                </div>
                                                <div class="w-full">
                                                    <p class="py-4 text-2xl text-gray-700 flex text-left">{item.content}</p>
                                                </div>
                                            </div>
                                        {/* <Accordion>
                                        
                                                <Accordion.Title
                                                    active={activeIndex === index}
                                                    index={index}
                                                    onClick={this.handleClick}
                                                >
                                                    <Icon name='dropdown' />
                                                    {item.title}
                                                </Accordion.Title>
                                                <Accordion.Content active={activeIndex === index}>
                                                    {item.content}
                                                </Accordion.Content>
                                            
                                        


                                        </Accordion> */}
                                        </>)
                                        })}
                                    </div>
                                </Grid.Column>
                            </Grid.Row></Grid>
                        </div>

                        <div id="fourth" class="hidden p-4">
                            <Grid><Grid.Row>
                                {/* <Grid.Column width={ rate } computer={ rate } mobile={ 16 }>
                                        <Button color={ "teal" } variant="secondary" size="lg" disabled >選舉大事紀</Button>
                                    </Grid.Column> */}
                                <Grid.Column width={16} >
                                    <div class="p-4 rounded-md">
                                        <Ref innerRef={this.thingRef}><h1 class="flex justify-center text-5xl mb-12">民主大事紀</h1></Ref>
                                        <p class="flex justify-center">這裡是民主大事紀,記錄著台灣民主有關發生的大事件。 </p>
                                        <Image src={time1} size='large' centered />
                                        <Image src={time2} size='large' centered />
                                        <Image src={time3} size='large' centered />
                                        <Image src={time4} size='large' centered />
                                        <Image src={time5} size='large' centered />
                                        <Image src={time6} size='large' centered />
                                        <Image src={time7} size='large' centered />

                                        {/* <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>屆別</Table.HeaderCell>
                                            <Table.HeaderCell>投票日</Table.HeaderCell>
                                            <Table.HeaderCell>重要記事</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell width="2">第1任</Table.Cell>
                                            <Table.Cell width="4">37年4月19日(總統)<br />37年4月23日(副總統)</Table.Cell>
                                            <Table.Cell>
                                                依民國36年12月25日施行之憲法規定，總統、副總統之任期為6年，連選得連任1次。
                                                <br />依當時之總統副總統選舉罷免法規定，首屆總統、副總統之選舉日期由國民大會訂定；總統副總統選舉應分別舉行，先選總統，再選副總統。
                                                <br />第1任總統副總統選舉，由第1屆第1  次國民大會選出，蔣中正先生當選為總統，李宗仁先生當選為副總統。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第2任</Table.Cell>
                                            <Table.Cell>43年3月20日(總統)<br />43年3月22日(副總統)</Table.Cell>
                                            <Table.Cell>
                                                依當時之總統副總統選舉罷免法規定，總統副總統之選舉，應於每屆總統任滿前60日舉行
                                                <br />第2任總統副總統選舉，由第1屆第2  次國民大會選出，蔣中正先生當選連任為總統，陳誠先生當選為副總統。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第3任</Table.Cell>
                                            <Table.Cell>49年3月21日 (總統)<br />49年3月22日 (副總統)</Table.Cell>
                                            <Table.Cell>
                                                依36年12月25日施行之憲法規定，總統副總統連選得連任一次，第2任總統副總統之任期，依規定應於49年5月20日屆滿，惟因應當時各界要求蔣中正先生連任之呼聲，第1屆國民大會於第3次會議第6次大會通過修正動員戡亂時期臨時條款，規定「動員戡亂時期，總統副總統得連選連任，不受憲法第47條連任1次之限制」。
                                                <br />第3任總統副總統選舉，由第1屆第3次國民大會選出，蔣中正先生當選連任為總統，陳誠先生當選連任為副總統。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第4任</Table.Cell>
                                            <Table.Cell>55年3月21日 (總統)<br />55年3月22日 (副總統)</Table.Cell>
                                            <Table.Cell>
                                                第4任總統副總統選舉，由第1屆第4次國民大會選出，蔣中正先生當選連任為總統，嚴家淦先生當選為副總統。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第5任</Table.Cell>
                                            <Table.Cell>61年3月21日 (總統)<br />61年3月22日 (副總統)</Table.Cell>
                                            <Table.Cell>
                                                第5任總統副總統選舉，由第1屆第5次國民大會選出，蔣中正先生當選連任為總統，嚴家淦先生當選連任為副總統。
                                                <br />64年4月5日總統蔣中正逝世，由副總統嚴家淦先生繼任為總統。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第6任</Table.Cell>
                                            <Table.Cell>67年3月21日 (總統)<br />67年3月22日 (副總統)</Table.Cell>
                                            <Table.Cell>
                                                第6任總統副總統選舉，由第1屆第6次國民大會選出，蔣經國先生當選為總統，謝東閔先生當選為副總統。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第7任</Table.Cell>
                                            <Table.Cell>73年3月21日 (總統)<br />73年3月22日 (副總統)</Table.Cell>
                                            <Table.Cell>
                                                第7任總統副總統選舉，由第1屆第7次國民大會選出，蔣經國先生當選為總統，李登輝先生當選為副總統。
                                                <br />民國77年1月13日總統蔣經國先生逝世，由副總統李登輝先生繼任為總統。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第8任</Table.Cell>
                                            <Table.Cell>79年3月21日 (總統)<br />79年3月22日 (副總統)</Table.Cell>
                                            <Table.Cell>
                                                第8任總統副總統選舉，由第1屆第7次國民大會選出，李登輝先生當選為總統，李元簇先生當選為副總統。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第9任</Table.Cell>
                                            <Table.Cell>85年3月23日</Table.Cell>
                                            <Table.Cell>
                                                依照81年5月28日修正公布之憲法增修條文規定，總統、副總統由中華民國自由地區全體人民選舉之，自中華民國85年第九任總統、副總統選舉實施，任期4年，連選得連任一次。
                                                <br />84年8月9日制定公布之總統副總統選舉罷免法規定，總統副總統候選人係採聯名登記，以候選人得票數最多之一組為當選，候選人依法須經政黨推薦或取得一定公民人數之連署。
                                                <br />第9任總統副總統選舉，候選人共計有4組，分別為中國國民黨推薦之李登輝先生、連戰先生；民主進步黨推薦之彭明敏先生、謝長廷先生；經連署人連署通過之林洋港先生、郝柏村先生以及陳履安先生、王清峰女士。
                                                <br />第9任總統副總統選舉，由中國國民黨推薦之李登輝先生及連戰先生分別當選為總統及副總統。
                                                <br />總統副總統首次由人民直接選舉產生。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第10任</Table.Cell>
                                            <Table.Cell>89年3月18日</Table.Cell>
                                            <Table.Cell>
                                                <br />第10任總統副總統選舉，候選人共計有5組，分別為中國國民黨推薦之連戰先生、蕭萬長先生；民主進步黨推薦之陳水扁先生、呂秀蓮女士；新黨推薦之李敖先生、馮滬祥先生；經連署人連署通過之宋楚瑜先生、張昭雄先生以及許信良先生、朱惠良女士。
                                                <br />第10任總統副總統選舉，由民主進步黨推薦之陳水扁先生及呂秀蓮女士分別當選為總統及副總統，呂秀蓮女士並為首位女性民選副總統。
                                                <br />我國首度政黨更迭。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第11任</Table.Cell>
                                            <Table.Cell>93年3月20日</Table.Cell>
                                            <Table.Cell>
                                                <br />第11任總統副總統選舉，候選人共計有2組，分別為中國國民黨及親民黨推薦之連戰先生、宋楚瑜先生以及民主進步黨推薦之陳水扁先生、呂秀蓮女士。
                                                <br />第11任總統副總統選舉，由民主進步黨推薦之陳水扁先生及呂秀蓮女士分別當選連任為總統及副總統。
                                                <br />投票前1日下午1時45分，候選人之一，亦為現任總統、副總統之陳水扁先生與呂秀蓮女士，於台南市掃街拜票時，發生兩人遭受槍擊受傷之事件。
                                                <br />本次選舉當選組與落選組之票數接近，差距甚少，落選的一組候選人向法院提出選舉無效及當選無效二項選舉訴訟。本案是我國總統全民直選以來，第一次總統選舉全面查驗選票案例。上開選舉無效及當選無效之訴訟經高等法院及最高法院審理後均被駁回。
                                                <br />合併舉行全國性公民投票第1案及第2案投票。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第12任</Table.Cell>
                                            <Table.Cell>97年3月22日</Table.Cell>
                                            <Table.Cell>
                                                <br />第12任總統副總統選舉，候選人共計有2組，分別為中國國民黨推薦之馬英九先生、蕭萬長先生以及民主進步黨推薦之謝長廷先生、蘇貞昌先生。
                                                <br />第12任總統副總統選舉，由中國國民黨推薦之馬英九先生及蕭萬長先生分別當選為總統及副總統。
                                                <br />合併舉行全國性公民投票第5案及第6案投票。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第13任</Table.Cell>
                                            <Table.Cell>101年1月14日</Table.Cell>
                                            <Table.Cell>
                                                <br />第13任總統副總統選舉，候選人共計有3組，分別為中國國民黨推薦之馬英九先生、吳敦義先生；民主進步黨推薦之蔡英文女士、蘇嘉全先生；經連署人連署通過之宋楚瑜先生、林瑞雄先生。
                                                <br />第13任總統副總統選舉與第8屆立法委員選舉合併舉行投票，由中國國民黨推薦之馬英九先生及吳敦義先生分別當選為總統及副總統。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第14任</Table.Cell>
                                            <Table.Cell>105年1月16日</Table.Cell>
                                            <Table.Cell>
                                                <br />第14任總統副總統選舉，候選人共計有3組，分別為中國國民黨推薦之朱立倫先生、王如玄女士；民主進步黨推薦之蔡英文女士、陳建仁先生；親民黨推薦之宋楚瑜先生、徐欣瑩女士。
                                                <br />第14任總統副總統選舉與第9屆立法委員選舉合併舉行投票，由民主進步黨推薦之蔡英文女士及陳建仁先生分別當選為總統及副總統。
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>第15任</Table.Cell>
                                            <Table.Cell>109年1月11日</Table.Cell>
                                            <Table.Cell>
                                                <br />第15任總統副總統選舉，候選人共計有3組，分別為親民黨推薦之宋楚瑜先生、余湘女士；中國國民黨推薦之韓國瑜先生、張善政先生；民主進步黨推薦之蔡英文女士、賴清德先生。
                                                <br />第15任總統副總統選舉與第9屆立法委員選舉合併舉行投票，由民主進步黨推薦之蔡英文女士及賴清德先生分別當選為總統及副總統。
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body> */}

                                        {/* <Table.Footer>
                                        <Table.Row>
                                            <Table.HeaderCell colSpan='3'>
                                                <Menu floated='right' pagination>
                                                    <Menu.Item as='a' icon>
                                                        <Icon name='chevron left' />
                                                    </Menu.Item>
                                                    <Menu.Item as='a'>1</Menu.Item>
                                                    <Menu.Item as='a'>2</Menu.Item>
                                                    <Menu.Item as='a'>3</Menu.Item>
                                                    <Menu.Item as='a'>4</Menu.Item>
                                                    <Menu.Item as='a' icon>
                                                        <Icon name='chevron right' />
                                                    </Menu.Item>
                                                </Menu>
                                            </Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Footer> 

                                </Table>*/}
                                    </div>
                                </Grid.Column>
                            </Grid.Row></Grid>
                        </div>

                    </div>
                </div>
            </>)
        } />)
    }
}





export default Election = {
    routeProps: {
        path: "/election",
        component: Election
    },
    name: "選舉專區"
}