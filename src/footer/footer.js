import "./footer.scss"
import telegram from "../assets/telegram.svg";
import phone from "../assets/viber.svg";

export default function Footer () {
    const renderFooter = () => {
        return (
            <div className={`mfooter`}>
                <div className={`footer_about`}>
                    <div className={`footer_about-title`}>О КОМПАНИИ</div>
                    <div className={`footer_about-item`}>Партнерская программа</div>
                    <div className={`footer_about-item`}>Вакансии</div>
                </div>
                <div className={`footer_mainmenu`}>
                    <div className={`footer_menu`}>
                        <div className={`footer_about-title`}>МЕНЮ</div>
                        <div className={`footer_about-item`}>Расчёт стоимости</div>
                        <div className={`footer_about-item`}>Услуги</div>
                        <div className={`footer_about-item`}>Виджеты</div>
                        <div className={`footer_about-item`}>Интеграции</div>
                        <div className={`footer_about-item`}>Наши клиенты</div>
                    </div>
                    <div className={`footer_menu`}>
                        <div className={`footer_about-title`} style={{color: "transparent"}}>А</div> {/*Костыль на скорую руку :)*/}
                        <div className={`footer_about-item`}>Кейсы</div>
                        <div className={`footer_about-item`}>Благодарственные письма</div>
                        <div className={`footer_about-item`}>Сертификаты</div>
                        <div className={`footer_about-item`}>Блог на Youtube</div>
                        <div className={`footer_about-item`}>Вопрос / Ответ</div>
                    </div>
                </div>
                
                <div className={`footer_contacts`}>
                    <div className={`footer_about-title align-text-left`}>КОНТАКТЫ</div>
                    <div className={`footer_about-item align-text-left`}>+7 555 555-55-55</div>
                    <div className={`footer_about-item align-text-left`}>
                        <img src={telegram}/>
                        <img src={phone}/>
                        <img src={`https://icongr.am/fontawesome/whatsapp.svg?size=20&color=ffffff`}/>
                    </div>
                    <div className={`footer_about-item align-text-left`}>Москва, Путевой проезд 3с1, к 902</div>
                    <div className={`footer_about-rights`}>
                        ©WELBEX 2022. Все права защищены. <br/>
                        Политика конфиденциальности
                    </div>
                </div>
            </div>
        )
    }
    return (
        renderFooter()
    )
}