import logo from "../assets/logo_welbex.svg";
import telegram from "../assets/telegram.svg";
import phone from "../assets/viber.svg";
import "./header.scss"

export default function Header () {
    const renderHeader = () => {
        return (
            <>
                <div className={`header-left`}>
                    <div className={`header_logo`}>
                        <img src={logo} />
                        <div className={`header_logo-description`}>
                            крупный интегратор CRM в Росcии и ещё 8 странах
                        </div>
                    </div>
                    <div className={`header_item`}>Услуги</div>
                    <div className={`header_item`}>Виджеты</div>
                    <div className={`header_item`}>Интеграции</div>
                    <div className={`header_item`}>Кейсы</div>
                    <div className={`header_item cetrificates`}>Сертификаты</div>
                </div>

                <div className={`header-right`}>
                    <div className={`header_phone`}>
                        +7 555 555 55 55
                    </div>
                    <div className={`header-social`}>
                        <img src={telegram}/>
                        <img src={phone}/>
                        <img src={`https://icongr.am/fontawesome/whatsapp.svg?size=20&color=ffffff`}/>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className={`main_header`}>
            {renderHeader()}
        </div>
    )
}