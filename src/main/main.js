import "./main.scss"
import gradient_line from "../assets/line.svg";

export default function Main () {
    const renderMain = () => {
        return (
            <div className={`main`}>
                <div className={`main_leftside`}>
                    <div className={`main_leftside-top`}>Зарабатывайте больше</div>
                    <div className={`main_leftside-colored`}>c WELBEX</div>
                    <div className={`main_leftside-bottom`}>Развиваем и контролируем продажи за вас</div>
                </div>
                <div className={`main_rightside`}>
                    <div className={`main_rightside-title`}>
                        <div style={{display: "flex"}}>
                            Вместе с 
                            <div className={`main_rightside-colored`}>БЕСПЛАТНОЙ</div>
                        </div>
                        <div className={`main_rightside-colored`}>КОНСУЛЬТАЦИЕЙ</div> 
                        мы дарим:
                    </div>
                    <div className={`main_rightside-table`}>
                        <div className={`main_rightside-table_first`}>
                            <div className={`main_rightside-table_item`}>
                                <div className={`main_rightside-table_item-title`}>
                                    <img src={gradient_line} className={`gradient_line`}/>
                                    ВИДЖЕТЫ
                                    </div>
                                <div className={`main_rightside-table_item-description`}>30 готовых решений</div>
                            </div>
                            <div className={`main_rightside-table_item`}>
                                <div className={`main_rightside-table_item-title`}>
                                    <img src={gradient_line} className={`gradient_line`}/>
                                    DASHBOARD
                                    </div>
                                <div className={`main_rightside-table_item-description`}>с показателями вашего бизнеса</div>
                            </div>
                        </div>
                        <div className={`main_rightside-table_second`}>
                            <div className={`main_rightside-table_item`}>
                                <div className={`main_rightside-table_item-title`}>
                                    <img src={gradient_line} className={`gradient_line`}/>
                                    SKYPE АУДИТ
                                </div>
                                <div className={`main_rightside-table_item-description`}>отдела продажи CRM системы</div>
                            </div>
                            <div className={`main_rightside-table_item`}>
                                <div className={`main_rightside-table_item-title`}>
                                    <img src={gradient_line} className={`gradient_line`}/>
                                    35 ДНЕЙ
                                </div>
                                <div className={`main_rightside-table_item-description`}>использования CRM</div>
                            </div>
                        </div>
                    </div>
                    <div className={`main_rightside-button`}>Получить консультацию</div>
                </div>
            </div>
        )
    }
    return (
        renderMain()
    )
}