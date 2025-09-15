import classNames from "classnames/bind";
import { useState, useRef } from "react";

//scss
import styles from "./ModalDemo.module.scss";

// Comp
import { Modal } from "@/components";

const cx = classNames.bind(styles);

function ModalDemo() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);
  const [isModalOpen7, setIsModalOpen7] = useState(false);
  const btnRef = useRef();

  return (
    <div className={cx("wrapper")}>
      <button className={cx("btn")} onClick={() => setIsModalOpen1(true)}>
        Open Basic Modal
      </button>
      <button className={cx("btn")} onClick={() => setIsModalOpen2(true)}>
        Open Modal with Animation
      </button>
      <button className={cx("btn")} onClick={() => setIsModalOpen3(true)}>
        Modal không đóng khi click overlay
      </button>
      <button className={cx("btn")} onClick={() => setIsModalOpen4(true)}>
        Modal không đóng khi nhấn Esc
      </button>
      <button className={cx("btn")} onClick={() => setIsModalOpen5(true)}>
        Modal với custom className
      </button>
      <button className={cx("btn")} onClick={() => setIsModalOpen6(true)}>
        Modal với callbacks
      </button>

      <div className={cx("actions")}>
        <button className={cx("btn")} onClick={() => btnRef.current.open()}>
          Open modal ref
        </button>

        <button className={cx("btn")} onClick={() => btnRef.current.toggle()}>
          Toggle modal ref
        </button>
      </div>
      <p>
        asdashdkajshdkjashdkasjdhaklsdjhlsakjsdlcdsjhcsdlkjc halkdsjch
        sldkjhsdckjhsd kcjsdhckj shclkjdh ckajsdhclkjsdhcajhskjchslkjc
        hsakjhaskdcj haksjdchklsjdch ksjcdh ksjhdcshcd abkjdh bkhbdkjhcbaskjcdhb
        hjabsdcha bsdkchjasb jhsdcbaksdjhcbkajs dhcksdajhcb
        skjcbdskjcbsadchjsdabckjhsdbcksadjhcb sdajkchbsadjkc hsd bckjsdahcb sad
        jkchbsdacjkhsdb cj sadbckjsdahcbsakjdchbsdkcjhasdbcjkasdhbc
        asdkjchbasdcjkashzdbck
        jchbaskjchbaskchsdbcjkahsvsidcvasdcvsadchsavckljshbcvksjadcvaksdjhcvsajkchvdsajckhsvdajkhsadvcjksadhcvbskdjhcvasdkjhcvasdjkhcasvdcjkhasdbvcsd
        hgvsdcjhb asckjhbdchasdbcyawcbekucgqouw2yrftelw hijwfg
        yewgquyrwgfowuqyGcAShYCGUOYSadGcASDoCGHSdAOU GASDUCG
        TGFOEWRYIUHASOdIucHASDHBCGAJsKdFVGWER7ipfYWEIPuSDJHFGVsAdUY7fTSDAOfhGSDAFIJhYSdAG
        F78WEYFSFJHSadGFUYAsdFGASodIUFCGasDOFIuYagsDFOKJAsDGFLKjUsdAGF87AwE3FIASFBGJHSdGFSD87F
        S8D S SA8FYSAD87F SD8F SAD8FYSD89FSD9F SD9F SD9FYD9FSDU9F8 dSF9 SD8F
        SD9FY SD98F SDF SD8F S9D8F 0Q293UDWFHDSF989ASDFASD8FYA0S9 DFS
        DFSDFYA09SD7FYUDSYFIUASD hFASDFY09Sda8F ASDF SD9FYDS 9FYSDF
        8ASFYSD9f8ASDyF90DS8AFyJQWHRTLJMNAS CKDSFUGSDOPiRfuASPDkJFHASDLF DSF SDF
        SDFDSOP FIUSDFSDFOSD FSDFIUSADPOFIU SDPOifUSD FDSOI ASIDFuAOPSDiF ASPDo
        FAPSOIdfUASPO UPSDFU APOSFUAPS OFUASdOPFU
        ASOpiUDPfoUASDpFOUASdOPfUASDFPOAsDiUFPOAsdFUSAdPOFUASDoIFUAW8EFWAUEFOEYRUFOASIudHFIAUsyDFgHIAOusyDGhfOASUiFGASioDUFGASdoIuFGASDoIFGAiSUdoYF
        GADISoFGHAOSdIfGAOPSDiuFyHGA
        Wso8UFGEOIUhASDgFoUJYsadGFOUaySDgFAOSIfhgASDIoFGASodIUfGASDIuFgHKASdjHgFKLAdsJFHGASLdKFHDSFHdASKFJHASdKfJHSAKdJFHAS
        kdJFHASdkFHSDKFHKJHDSkJ
        FHSDkJFHDSKFHSAdLkFJSAdhFKLJSaDhFLKASjHDNLKfJASHDlKFJHASDlKFHSADLFJSADH
        fLKJAsdHFKLJhA SKjDfHASkDLJFH ASKdl JFH ASdKLjFHASdKlJfHASDKLjH
        FKSlAJDFHSKJaLHDSKLJFHASDklJFHKlAJsDHFKLjASdFHKLJadsF
        HKLasdFHkASldFHASDFu7 WAHeLJUfHe IOUrFYWER
        oIUQTWyEiUYQweIOUtRyEWRIouYQWeOIUrYQOIWeurYQWoEiUrYQWOiEuryQWIEouRYWQeIUrYWQEioURYWQeiRuASDJkFHSAdkJFHASdKJFHKASLJFHALSDkJFHASDKLFHASDkJFHSKLAHDFLKASHFJDHJFHASLDKFJHDSALkFJHLDKSJFHALSKDFHAKJLSdHGASDKJ
        HGKJASDhLKGjH LDKjHGASLKDg h
        asdashdkajshdkjashdkasjdhaklsdjhlsakjsdlcdsjhcsdlkjc halkdsjch
        sldkjhsdckjhsd kcjsdhckj shclkjdh ckajsdhclkjsdhcajhskjchslkjc
        hsakjhaskdcj haksjdchklsjdch ksjcdh ksjhdcshcd abkjdh bkhbdkjhcbaskjcdhb
        hjabsdcha bsdkchjasb jhsdcbaksdjhcbkajs dhcksdajhcb
        skjcbdskjcbsadchjsdabckjhsdbcksadjhcb sdajkchbsadjkc hsd bckjsdahcb sad
        jkchbsdacjkhsdb cj sadbckjsdahcbsakjdchbsdkcjhasdbcjkasdhbc
        asdkjchbasdcjkashzdbck
        jchbaskjchbaskchsdbcjkahsvsidcvasdcvsadchsavckljshbcvksjadcvaksdjhcvsajkchvdsajckhsvdajkhsadvcjksadhcvbskdjhcvasdkjhcvasdjkhcasvdcjkhasdbvcsd
        hgvsdcjhb asckjhbdchasdbcyawcbekucgqouw2yrftelw hijwfg
        yewgquyrwgfowuqyGcAShYCGUOYSadGcASDoCGHSdAOU GASDUCG
        TGFOEWRYIUHASOdIucHASDHBCGAJsKdFVGWER7ipfYWEIPuSDJHFGVsAdUY7fTSDAOfhGSDAFIJhYSdAG
        F78WEYFSFJHSadGFUYAsdFGASodIUFCGasDOFIuYagsDFOKJAsDGFLKjUsdAGF87AwE3FIASFBGJHSdGFSD87F
        S8D S SA8FYSAD87F SD8F SAD8FYSD89FSD9F SD9F SD9FYD9FSDU9F8 dSF9 SD8F
        SD9FY SD98F SDF SD8F S9D8F 0Q293UDWFHDSF989ASDFASD8FYA0S9 DFS
        DFSDFYA09SD7FYUDSYFIUASD hFASDFY09Sda8F ASDF SD9FYDS 9FYSDF
        8ASFYSD9f8ASDyF90DS8AFyJQWHRTLJMNAS CKDSFUGSDOPiRfuASPDkJFHASDLF DSF SDF
        SDFDSOP FIUSDFSDFOSD FSDFIUSADPOFIU SDPOifUSD FDSOI ASIDFuAOPSDiF ASPDo
        FAPSOIdfUASPO UPSDFU APOSFUAPS OFUASdOPFU
        ASOpiUDPfoUASDpFOUASdOPfUASDFPOAsDiUFPOAsdFUSAdPOFUASDoIFUAW8EFWAUEFOEYRUFOASIudHFIAUsyDFgHIAOusyDGhfOASUiFGASioDUFGASdoIuFGASDoIFGAiSUdoYF
        GADISoFGHAOSdIfGAOPSDiuFyHGA
        Wso8UFGEOIUhASDgFoUJYsadGFOUaySDgFAOSIfhgASDIoFGASodIUfGASDIuFgHKASdjHgFKLAdsJFHGASLdKFHDSFHdASKFJHASdKfJHSAKdJFHAS
        kdJFHASdkFHSDKFHKJHDSkJ
        FHSDkJFHDSKFHSAdLkFJSAdhFKLJSaDhFLKASjHDNLKfJASHDlKFJHASDlKFHSADLFJSADH
        fLKJAsdHFKLJhA SKjDfHASkDLJFH ASKdl JFH ASdKLjFHASdKlJfHASDKLjH
        FKSlAJDFHSKJaLHDSKLJFHASDklJFHKlAJsDHFKLjASdFHKLJadsF
        HKLasdFHkASldFHASDFu7 WAHeLJUfHe IOUrFYWER
        oIUQTWyEiUYQweIOUtRyEWRIouYQWeOIUrYQOIWeurYQWoEiUrYQWOiEuryQWIEouRYWQeIUrYWQEioURYWQeiRuASDJkFHSAdkJFHASdKJFHKASLJFHALSDkJFHASDKLFHASDkJFHSKLAHDFLKASHFJDHJFHASLDKFJHDSALkFJHLDKSJFHALSKDFHAKJLSdHGASDKJ
        HGKJASDhLKGjH LDKjHGASLKDg h
        asdashdkajshdkjashdkasjdhaklsdjhlsakjsdlcdsjhcsdlkjc halkdsjch
        sldkjhsdckjhsd kcjsdhckj shclkjdh ckajsdhclkjsdhcajhskjchslkjc
        hsakjhaskdcj haksjdchklsjdch ksjcdh ksjhdcshcd abkjdh bkhbdkjhcbaskjcdhb
        hjabsdcha bsdkchjasb jhsdcbaksdjhcbkajs dhcksdajhcb
        skjcbdskjcbsadchjsdabckjhsdbcksadjhcb sdajkchbsadjkc hsd bckjsdahcb sad
        jkchbsdacjkhsdb cj sadbckjsdahcbsakjdchbsdkcjhasdbcjkasdhbc
        asdkjchbasdcjkashzdbck
        jchbaskjchbaskchsdbcjkahsvsidcvasdcvsadchsavckljshbcvksjadcvaksdjhcvsajkchvdsajckhsvdajkhsadvcjksadhcvbskdjhcvasdkjhcvasdjkhcasvdcjkhasdbvcsd
        hgvsdcjhb asckjhbdchasdbcyawcbekucgqouw2yrftelw hijwfg
        yewgquyrwgfowuqyGcAShYCGUOYSadGcASDoCGHSdAOU GASDUCG
        TGFOEWRYIUHASOdIucHASDHBCGAJsKdFVGWER7ipfYWEIPuSDJHFGVsAdUY7fTSDAOfhGSDAFIJhYSdAG
        F78WEYFSFJHSadGFUYAsdFGASodIUFCGasDOFIuYagsDFOKJAsDGFLKjUsdAGF87AwE3FIASFBGJHSdGFSD87F
        S8D S SA8FYSAD87F SD8F SAD8FYSD89FSD9F SD9F SD9FYD9FSDU9F8 dSF9 SD8F
        SD9FY SD98F SDF SD8F S9D8F 0Q293UDWFHDSF989ASDFASD8FYA0S9 DFS
        DFSDFYA09SD7FYUDSYFIUASD hFASDFY09Sda8F ASDF SD9FYDS 9FYSDF
        8ASFYSD9f8ASDyF90DS8AFyJQWHRTLJMNAS CKDSFUGSDOPiRfuASPDkJFHASDLF DSF SDF
        SDFDSOP FIUSDFSDFOSD FSDFIUSADPOFIU SDPOifUSD FDSOI ASIDFuAOPSDiF ASPDo
        FAPSOIdfUASPO UPSDFU APOSFUAPS OFUASdOPFU
        ASOpiUDPfoUASDpFOUASdOPfUASDFPOAsDiUFPOAsdFUSAdPOFUASDoIFUAW8EFWAUEFOEYRUFOASIudHFIAUsyDFgHIAOusyDGhfOASUiFGASioDUFGASdoIuFGASDoIFGAiSUdoYF
        GADISoFGHAOSdIfGAOPSDiuFyHGA
        Wso8UFGEOIUhASDgFoUJYsadGFOUaySDgFAOSIfhgASDIoFGASodIUfGASDIuFgHKASdjHgFKLAdsJFHGASLdKFHDSFHdASKFJHASdKfJHSAKdJFHAS
        kdJFHASdkFHSDKFHKJHDSkJ
        FHSDkJFHDSKFHSAdLkFJSAdhFKLJSaDhFLKASjHDNLKfJASHDlKFJHASDlKFHSADLFJSADH
        fLKJAsdHFKLJhA SKjDfHASkDLJFH ASKdl JFH ASdKLjFHASdKlJfHASDKLjH
        FKSlAJDFHSKJaLHDSKLJFHASDklJFHKlAJsDHFKLjASdFHKLJadsF
        HKLasdFHkASldFHASDFu7 WAHeLJUfHe IOUrFYWER
        oIUQTWyEiUYQweIOUtRyEWRIouYQWeOIUrYQOIWeurYQWoEiUrYQWOiEuryQWIEouRYWQeIUrYWQEioURYWQeiRuASDJkFHSAdkJFHASdKJFHKASLJFHALSDkJFHASDKLFHASDkJFHSKLAHDFLKASHFJDHJFHASLDKFJHDSALkFJHLDKSJFHALSKDFHAKJLSdHGASDKJ
        HGKJASDhLKGjH LDKjHGASLKDg h
        asdashdkajshdkjashdkasjdhaklsdjhlsakjsdlcdsjhcsdlkjc halkdsjch
        sldkjhsdckjhsd kcjsdhckj shclkjdh ckajsdhclkjsdhcajhskjchslkjc
        hsakjhaskdcj haksjdchklsjdch ksjcdh ksjhdcshcd abkjdh bkhbdkjhcbaskjcdhb
        hjabsdcha bsdkchjasb jhsdcbaksdjhcbkajs dhcksdajhcb
        skjcbdskjcbsadchjsdabckjhsdbcksadjhcb sdajkchbsadjkc hsd bckjsdahcb sad
        jkchbsdacjkhsdb cj sadbckjsdahcbsakjdchbsdkcjhasdbcjkasdhbc
        asdkjchbasdcjkashzdbck
        jchbaskjchbaskchsdbcjkahsvsidcvasdcvsadchsavckljshbcvksjadcvaksdjhcvsajkchvdsajckhsvdajkhsadvcjksadhcvbskdjhcvasdkjhcvasdjkhcasvdcjkhasdbvcsd
        hgvsdcjhb asckjhbdchasdbcyawcbekucgqouw2yrftelw hijwfg
        yewgquyrwgfowuqyGcAShYCGUOYSadGcASDoCGHSdAOU GASDUCG
        TGFOEWRYIUHASOdIucHASDHBCGAJsKdFVGWER7ipfYWEIPuSDJHFGVsAdUY7fTSDAOfhGSDAFIJhYSdAG
        F78WEYFSFJHSadGFUYAsdFGASodIUFCGasDOFIuYagsDFOKJAsDGFLKjUsdAGF87AwE3FIASFBGJHSdGFSD87F
        S8D S SA8FYSAD87F SD8F SAD8FYSD89FSD9F SD9F SD9FYD9FSDU9F8 dSF9 SD8F
        SD9FY SD98F SDF SD8F S9D8F 0Q293UDWFHDSF989ASDFASD8FYA0S9 DFS
        DFSDFYA09SD7FYUDSYFIUASD hFASDFY09Sda8F ASDF SD9FYDS 9FYSDF
        8ASFYSD9f8ASDyF90DS8AFyJQWHRTLJMNAS CKDSFUGSDOPiRfuASPDkJFHASDLF DSF SDF
        SDFDSOP FIUSDFSDFOSD FSDFIUSADPOFIU SDPOifUSD FDSOI ASIDFuAOPSDiF ASPDo
        FAPSOIdfUASPO UPSDFU APOSFUAPS OFUASdOPFU
        ASOpiUDPfoUASDpFOUASdOPfUASDFPOAsDiUFPOAsdFUSAdPOFUASDoIFUAW8EFWAUEFOEYRUFOASIudHFIAUsyDFgHIAOusyDGhfOASUiFGASioDUFGASdoIuFGASDoIFGAiSUdoYF
        GADISoFGHAOSdIfGAOPSDiuFyHGA
        Wso8UFGEOIUhASDgFoUJYsadGFOUaySDgFAOSIfhgASDIoFGASodIUfGASDIuFgHKASdjHgFKLAdsJFHGASLdKFHDSFHdASKFJHASdKfJHSAKdJFHAS
        kdJFHASdkFHSDKFHKJHDSkJ
        FHSDkJFHDSKFHSAdLkFJSAdhFKLJSaDhFLKASjHDNLKfJASHDlKFJHASDlKFHSADLFJSADH
        fLKJAsdHFKLJhA SKjDfHASkDLJFH ASKdl JFH ASdKLjFHASdKlJfHASDKLjH
        FKSlAJDFHSKJaLHDSKLJFHASDklJFHKlAJsDHFKLjASdFHKLJadsF
        HKLasdFHkASldFHASDFu7 WAHeLJUfHe IOUrFYWER
        oIUQTWyEiUYQweIOUtRyEWRIouYQWeOIUrYQOIWeurYQWoEiUrYQWOiEuryQWIEouRYWQeIUrYWQEioURYWQeiRuASDJkFHSAdkJFHASdKJFHKASLJFHALSDkJFHASDKLFHASDkJFHSKLAHDFLKASHFJDHJFHASLDKFJHDSALkFJHLDKSJFHALSKDFHAKJLSdHGASDKJ
        HGKJASDhLKGjH LDKjHGASLKDg h
      </p>

      {/* modal 1 */}
      <Modal
        isOpen={isModalOpen1}
        onRequestClose={() => setIsModalOpen1(false)}
      >
        <div className={cx("content")}>
          <p>Đây là Basic Modal</p>
          <button onClick={() => setIsModalOpen1(false)}>Đóng</button>
        </div>
      </Modal>

      {/* modal 2 */}
      <Modal
        isOpen={isModalOpen2}
        onRequestClose={() => setIsModalOpen2(false)}
        closeTimeoutMS={3000}
      >
        <div className={cx("content")}>
          <p>Đây là Custom Modal</p>
          <button onClick={() => setIsModalOpen2(false)}>Đóng</button>
        </div>
      </Modal>

      {/* modal 3 */}
      <Modal
        isOpen={isModalOpen3}
        onRequestClose={() => setIsModalOpen3(false)}
        shouldCloseOnOverlayClick={false}
      >
        <div className={cx("content")}>
          <p>Đây là Custom Modal</p>
          <button onClick={() => setIsModalOpen3(false)}>Đóng</button>
        </div>
      </Modal>

      {/* modal 4 */}
      <Modal
        isOpen={isModalOpen4}
        onRequestClose={() => setIsModalOpen4(false)}
        shouldCloseOnEsc={false}
      >
        <div className={cx("content")}>
          <p>Đây là Custom Modal</p>
          <button onClick={() => setIsModalOpen4(false)}>Đóng</button>
        </div>
      </Modal>

      {/* modal 5 */}
      <Modal
        isOpen={isModalOpen5}
        onRequestClose={() => setIsModalOpen5(false)}
        className={cx("custom-modal")}
      >
        <div className={cx("content")}>
          <p>Đây là Custom Modal</p>
          <button onClick={() => setIsModalOpen5(false)}>Đóng</button>
        </div>
      </Modal>

      {/* modal 6 */}
      <Modal
        isOpen={isModalOpen6}
        onRequestClose={() => setIsModalOpen6(false)}
        onAfterOpen={() => console.log("Modal đã mở")}
        onAfterClose={() => console.log("Modal đã đóng")}
      >
        <div className={cx("content")}>
          <p>Đây là Custom Modal</p>
          <button onClick={() => setIsModalOpen6(false)}>Đóng</button>
        </div>
      </Modal>

      {/* modal 7 */}
      <Modal
        isOpen={isModalOpen7}
        onRequestOpen={() => setIsModalOpen7(true)}
        onRequestToggle={() => setIsModalOpen7(!isModalOpen7)}
        onRequestClose={() => setIsModalOpen7(false)}
        ref={btnRef}
      >
        <div className={cx("content")}>
          <p>Đây là Custom Modal useRef</p>
          <button onClick={() => btnRef.current.close()}>
            Close modal ref
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalDemo;
