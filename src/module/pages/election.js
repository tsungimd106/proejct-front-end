import React from 'react';
import { Pages } from "../pages.js"
import { Grid, Button, Ref, Segment, Menu, Embed, Accordion, Icon, List } from 'semantic-ui-react'
import style from "../../css/election.module.css"



class Election extends React.Component {
    constructor(props) {
        super(props)
        this.voteRef = React.createRef();
        this.QARef = React.createRef();
        this.thingRef = React.createRef();
        this.searchRef = React.createRef();
        this.state = {
            qa: [{ title: "選舉前幾天不能宣傳嗎?為甚麼?會有甚麼後果?", content: "答：投票日不可從事競選或助選活動：1.不可從事競選或助選活動(包含用簡訊或LINE等通訊軟體進行拉票)，違反者，處新臺幣50萬元以上5百萬元以下罰鍰，經制止不聽者，按次連續處罰。2.不可於投票所四周30公尺內喧嚷或干擾勸誘他人投票或不投票，經警衛人員制止後仍繼續為之者，處1年以下有期徒刑、拘役或科新臺幣1萬5千以下罰金。" },
            { title: "身心障礙者可否由家屬協助投票?", content: "- 答：選舉人如因身心障礙不能自行圈投，而能表示其意思者，得依其請求，由家屬1人在場，依據本人意思，眼同協助或代為圈投；如當事人無法表示其意思，則不適用上開規定。" },
            { title: "我去投票所排隊的時候，下午四點到了，還能投票嗎?", content: "答：只要您在投票時間截止前到達投票所前排隊領票，仍可投票。" },
            { title: "不小心圈選於圈選欄之外的選票是否有效?", content: "答：選票圈選欄為3公分＊2.5公分之空白欄位，圈選工具之印文直徑則為1公分，是以選舉人在正常圈選之情況下，圈印印文應不致跨出欄外，但如不小心蓋出欄外，只要所蓋印文蓋於欄格線，仍可辨別圈選何候選人時，仍將被認定為有效票。" },
            { title: "投票的時候，我不小心蓋錯選票，我該怎麼辦?可以重新領票再投嗎?", content: "答：投票的時候，不小心蓋錯選票，無法重新領票再投。請選舉人於投票時應審慎圈選，若不小心蓋錯選票，仍請投入票匭，請勿撕毀選票，或將選票攜出。若有違反者，撕毀選舉票，將處新臺幣5千 元以上5萬元以下罰鍰；攜出選舉票，將處1年以下有期徒刑、拘役或科新臺幣1萬5千元以下罰金。（總統副總統選舉罷免法第93條第1項、第96條第8項；公職人員選舉罷免法第108條第1項、第110條第8項）" },
            { title: "甚麼時候會收到選舉公報?", content: "答：各鄉(鎮、市、區)公所會在投票日2日前將選舉公報送達選舉區內各戶。" },
            { title: "我沒收到投票通知單，怎麼辦?", content: "答：投票通知單由戶政機關依據確定之選舉人名冊填造，送由鄉（鎮、市、區）公所於投票日2日前分送選舉區內各戶。屆時選舉人如未收到，可逕向戶籍地鄉（鎮、市、區）公所洽詢。" },

            ], activeIndex: 0,
            note: ["公告全國性公民投票案第20案投票日期、投票起、止時間、編號、主文、理由書、政府機關針對公民投票案提出之意見書、公民投票權行使範圍及方式、正反意見支持代表於全國性無線電視頻道發表意見或進行辯論之辦理期間與應遵行之事項等事項", "中選會提醒有意參加公投意見發表會或辯論會者，請在6月4日前申請許可設立辦事處並完成報名", "公告全國性公民投票案第19案投票日期、投票起、止時間、編號、主文、理由書、政府機關針對公民投票案提出之意見書、公民投票權行使範圍及方式、正反意見支持代表於全國性無線電視頻道發表意見或進行辯論之辦理期間與應遵行之事項等事項"]
        }
    }
    toVote = () => {

        this.voteRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    toQa = () => {
        this.QARef.current.scrollIntoView({ behavior: 'smooth' })
    }
    toSearch = () => {
        this.searchRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    toThing = () => {
        this.thingRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }


    render() {
        const rate = 3
        const { activeIndex } = this.state
        return (<Pages id={ 1 } pageInfo={ [{ content: '選舉報你知', active: true, href: "./#/election" }] } page={
            (<>
                <Menu secondary>
                    <Menu.Item
                        name='投票要點'

                        onClick={ this.toVote }
                    />
                    <Menu.Item
                        name='QA大集合'

                        onClick={ this.toQa }
                    />
                    <Menu.Item
                        name='查詢投票地點'

                        onClick={ this.toSearch }
                    />
                    <Menu.Item
                        name='選舉大記事'

                        onClick={ this.toThing }
                    />

                </Menu>
                <Segment basic>
                    <Grid><Grid.Row columns={ 2 }>
                        <Grid.Column width={ 4 }><img /></Grid.Column>
                        <Grid.Column width={ 12 }>
                            <Segment >
                                <h1>選舉公告</h1>
                                <List animated divided>
                                    { this.state.note.map((item, index) => {
                                        return (<> <List.Item>
                                            { item }
                                        </List.Item></>)
                                    }) }
                                </List>
                                <p>
                                    <Button color={ "teal" } variant="primary">看更多</Button>
                                </p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row></Grid>
                </Segment>

                <Segment basic>
                    <Grid><Grid.Row columns={ 2 }>
                        <Grid.Column width={ rate }>
                            <Ref innerRef={ this.voteRef }>
                                <Button color={ "teal" } variant="secondary" size="lg" disabled >投票要點</Button>
                            </Ref>
                        </Grid.Column>
                        <Grid.Column width={ 16 - rate }>
                            <Segment >
                                <h1 >投票要點</h1>
                                <Embed
                                    id='uZp4P70H6E8'
                                    // placeholder='/images/image-16by9.png'
                                    source='youtube'
                                />
                                <p>
                                    這裡是和投票要點,包含投票流程,投票必備品,相關影片和指南手冊
                                </p>

                            </Segment>
                        </Grid.Column>
                    </Grid.Row></Grid>
                </Segment>

                <Segment basic>
                    <Grid><Grid.Row columns={ 2 }>
                        <Grid.Column width={ rate }>
                            <Ref innerRef={ this.QARef }>
                                <Button color={ "teal" } variant="secondary" size="lg" disabled >QA大集合</Button>
                            </Ref>
                        </Grid.Column>

                        <Grid.Column width={ 16 - rate }>
                            <Segment >
                                <h1 >QA大集合</h1>
                                <Accordion>
                                    { this.state.qa.map((item, index) => {
                                        return (<>
                                            <Accordion.Title
                                                active={ activeIndex === index }
                                                index={ index }
                                                onClick={ this.handleClick }
                                            >
                                                <Icon name='dropdown' />
                                                { item.title }
                                            </Accordion.Title>
                                            <Accordion.Content active={ activeIndex === index }>
                                                { item.content }
                                            </Accordion.Content>
                                        </>)
                                    }) }


                                </Accordion>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row></Grid>
                </Segment>

                <Segment basic >
                    <Grid><Grid.Row columns={ 2 }>
                        <Grid.Column width={ rate }>
                            <Ref innerRef={ this.searchRef }>
                                <Button color={ "teal" } variant="secondary" size="lg" disabled >查詢投票地點</Button></Ref>
                        </Grid.Column>
                        <Grid.Column width={ 16 - rate }>
                            <Segment >
                                <h1 >查詢投票地點</h1>
                                <p>
                                    在這裡查詢自己的投票地點~
                                </p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row></Grid>
                </Segment>

                <Segment basic>
                    <Grid><Grid.Row columns={ 2 }>
                        <Grid.Column width={ rate }>
                            <Ref innerRef={ this.thingRef }><Button color={ "teal" } variant="secondary" size="lg" disabled >選舉大記事</Button></Ref>
                        </Grid.Column>
                        <Grid.Column width={ 16 - rate }>
                            <Segment >
                                <h1 >選舉大記事</h1>
                                <p>這裡是選舉大記事,記錄著台灣選舉開始以來發生的大事件。 </p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row></Grid>
                </Segment>




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