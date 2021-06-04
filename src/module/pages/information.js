import React from 'react';
import { Pages } from "../pages.js"
import { Grid, Button, Ref, Segment, Menu, Embed, Accordion ,Icon, GridRow} from 'semantic-ui-react'
import style from "../../css/election.module.css"



class Information extends React.Component {
    constructor(props) {
        super(props)
        this.voteRef = React.createRef();
        this.QARef = React.createRef();
        this.thingRef = React.createRef();
        this.searchRef = React.createRef();
        this.state = {
            qa:[{ title: "一、 隱私權保護政策的適用範圍", content: [
                <div>- 隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。</div> ,
                <div>- 隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。</div>]},
            { title: "二、 個人資料的蒐集、處理及利用方式", content: [
                <div>- 當您蒞臨本網站或參與本網站活動時，我們將視活動性質請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料。</div> ,
                <div>- 本網站蒐集足以識別使用者身分的個人資料，或日後經您同意而提供之其他個人資料，都僅供本網站於其內部、依照蒐集之目的進行處理和利用、或為完成提供服務或履行合約義務之必要、或依照相關法令規定或有權政府機關之命令或要求，否則本網站不會將足以識別使用者身分的個人資料提供給第三人（包括境內及境外）、或移作蒐集目的以外之使用。</div>] },
            { title: "三、 資料之保護", content: [
                <div>- 本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。</div>,
                <div>- 如因業務需要有必要委託本網站相關單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。</div>] },
            { title: "四、 網站對外的相關連結", content: [
                <div>- 本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</div>] },
            { title: "五、 與第三人共用個人資料之政策", content: [
                <div>本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。</div>,
                <div>前項但書之情形包括不限於：</div>,
                <div>- 經由您同意。</div>,
                <div>- 法律明文規定。</div>,
                <div>- 為維護國家安全或增進公共利益。</div>,
                <div>- 為免除您生命、身體、自由或財產上之危險。</div>,
                <div>- 當您在本網站的行為，違反本網站的服務條款或可能損害或妨礙本網站權益或導致任何人遭受損害時，經本網站揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。</div>,
                <div>- 有利於您的權益。</div>,
                <div>- 本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。</div>]},
            { title: "六、 Cookie 之使用", content: [
                <div>- Cookies 是從網站傳送到瀏覽器，並保存在使用者電腦硬碟中的簡短資料。為了提供您最佳的服務，當您使用本網站服務時，本網站有時會在您的電腦上設定與存取 Cookies。</div>,
                <div>- 您可以透過設定您的個人電腦或上網設備，決定是否允許 Cookies 技術的使用，如果您選擇拒絕所有的 Cookies 時，可能會造成您使用本網站服務之不便或部分功能無法正常執行，敬請理解。</div>,
                <div>- 您可以在 IE 的「工具-網際網路選項」的「安全性」，或 Firefox 的「工具-選項」的「個人隱私」，或 Chrome 的「工具-選項」的「隱私權設定」中選擇修改瀏覽器對 Cookies 的接受程度（包括：接受所有Cookies、設定 Cookies 時得到通知、拒絕所有 Cookies 等）。</div>] },
            { title: "七、 隱私權保護政策之修正", content:["- 本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。"] },

            ],activeIndex:0
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
        return (<Pages id={ 1 } page={
            (<>

                <Segment basic>
                    <Grid><Grid.Row>
                        <Grid.Column width={ 16 - rate }>
                            <Segment >
                                <h1 ><Icon name='info circle' size='big' />法規與條款資訊</h1>
                                
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
                                                <Grid><GridRow>
                                                    <Grid.Column width={1}></Grid.Column>
                                                    <Grid.Column width={15}>{ item.content }</Grid.Column>
                                                </GridRow>

                                                </Grid>
                                            </Accordion.Content>
                                        </>)
                                    }) }


                                </Accordion>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row></Grid>
                </Segment>





            </>)
        } />)
    }
}





export default Information = {
    routeProps: {
        path: "/information",
        component: Information
    },
    name: " 法規與條款資訊"
}