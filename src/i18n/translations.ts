import { DealStageKey, DealStructureKey, Language, SectorKey } from '../types/ma';

export interface UIStrings {
  brandSub: string;
  nav: {
    pipeline: string;
    advisory: string;
    process: string;
    ecosystem: string;
    tombstones: string;
    contact: string;
    deployProduct: string;
    investorPortal: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    ctaExplore: string;
    ctaSubmitMandate: string;
    securityNote: string;
    stats: {
      volumeLabel: string;
      volumeValue: string;
      mandatesLabel: string;
      mandatesValue: string;
      investorsLabel: string;
      investorsValue: string;
      closingLabel: string;
      closingValue: string;
    };
  };
  pipeline: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    deployBtn: string;
    resetBtn: string;
    resultsCount: (count: number) => string;
    sectors: Record<SectorKey, string>;
    structures: Record<DealStructureKey, string>;
    stages: Record<DealStageKey, string>;
    labels: {
      structureFilter: string;
      stageFilter: string;
      ticketSize: string;
      equityOffered: string;
      targetIRR: string;
      scaleOrEbitda: string;
      multiple: string;
      verifiedBadge: string;
      ndaBadge: string;
      featuredBadge: string;
      viewTeaserBtn: string;
      requestVdrBtn: string;
      emptyTitle: string;
      emptyDesc: string;
    };
  };
  advisory: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: Array<{
      code: string;
      title: string;
      desc: string;
      bullets: string[];
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Array<{
      step: string;
      tag: string;
      title: string;
      desc: string;
      deliverable: string;
    }>;
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    roles: Array<{
      id: string;
      badge: string;
      title: string;
      subtitle: string;
      benefits: string[];
      cta: string;
    }>;
  };
  tombstones: {
    eyebrow: string;
    title: string;
    subtitle: string;
    corridorsTitle: string;
    corridorsDesc: string;
  };
  modal: {
    confidentialHeader: string;
    tabs: {
      overview: string;
      vdr: string;
      ndaLoi: string;
    };
    execSummary: string;
    investmentHighlights: string;
    legalReadiness: string;
    idealBuyer: string;
    vdrTitle: string;
    vdrLockedNote: string;
    unlockBtn: string;
    ndaFormTitle: string;
    ndaFormSubtitle: string;
    fields: {
      fullName: string;
      organization: string;
      roleType: string;
      roleOptions: string[];
      email: string;
      phone: string;
      capitalCapacity: string;
      intentType: string;
      intentOptions: string[];
      agreeNda: string;
      submitNda: string;
      successTitle: string;
      successDesc: string;
      downloadTeaserBtn: string;
    };
  };
  deployModal: {
    badge: string;
    title: string;
    subtitle: string;
    codenameLabel: string;
    projectTitleLabel: string;
    sectorLabel: string;
    structureLabel: string;
    locationLabel: string;
    ticketLabel: string;
    equityLabel: string;
    irrLabel: string;
    scaleLabel: string;
    summaryLabel: string;
    highlight1Label: string;
    submitBtn: string;
    cancelBtn: string;
    publishedToast: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    desksTitle: string;
    desks: Array<{
      city: string;
      address: string;
      deskType: string;
    }>;
    confidentialPromiseTitle: string;
    confidentialPromiseDesc: string;
    form: {
      mandateType: string;
      mandateOptions: string[];
      name: string;
      company: string;
      position: string;
      email: string;
      phone: string;
      estimatedValue: string;
      message: string;
      submit: string;
      submittedTitle: string;
      submittedDesc: string;
    };
  };
  footer: {
    description: string;
    colPlatform: string;
    colSolutions: string;
    colCompliance: string;
    complianceItems: string[];
    disclaimer: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, UIStrings> = {
  vi: {
    brandSub: 'INSTITUTIONAL M&A & CAPITAL',
    nav: {
      pipeline: 'Sản phẩm M&A',
      advisory: 'Giải pháp Tư vấn',
      process: 'Quy trình 5 Bước',
      ecosystem: 'Hệ sinh thái',
      tombstones: 'Thương vụ',
      contact: 'Liên hệ Độc quyền',
      deployProduct: 'Đăng tải Sản phẩm M&A',
      investorPortal: 'Data Room (VDR)',
    },
    hero: {
      badge: 'NỀN TẢNG CẤU TRÚC & GIAO DỊCH M&A ĐỊNH CHẾ XUYÊN BIÊN GIỚI',
      titleLine1: 'Kiến tạo Chuẩn mực Mới cho',
      titleHighlight: 'Thương vụ M&A Chiến lược',
      titleLine2: '& Dòng vốn Quốc tế',
      subtitle:
        'DaiChungCapital kết nối bảo mật các Chủ dự án, Doanh nghiệp đầu ngành Việt Nam với mạng lưới Quỹ đầu tư Private Equity, Định chế Tài chính và Tập đoàn Chiến lược tại Châu Á – Thái Bình Dương thông qua quy trình chuẩn hóa Teaser – NDA – VDR – LOI.',
      ctaExplore: 'Khám phá Danh mục Sản phẩm M&A',
      ctaSubmitMandate: 'Ủy thác Bán / Gửi Đầu bài Đầu tư',
      securityNote: 'Bảo mật 100% theo chuẩn NDA Quốc tế · Hồ sơ Pháp lý & Kiểm toán đã Sàng lọc',
      stats: {
        volumeLabel: 'Tổng Quy mô Danh mục M&A',
        volumeValue: '$2.48B+',
        mandatesLabel: 'Sản phẩm M&A Đang Chào bán',
        mandatesValue: '26 Mandates',
        investorsLabel: 'Quỹ PE, Định chế & Tập đoàn',
        investorsValue: '340+ Đối tác',
        closingLabel: 'Chuẩn hóa Pháp lý & VDR',
        closingValue: '100% Xác thực',
      },
    },
    pipeline: {
      eyebrow: 'CURATED M&A DEAL PIPELINE',
      title: 'Danh mục Sản phẩm & Thương vụ M&A Chọn lọc',
      subtitle:
        'Toàn bộ tài sản và doanh nghiệp trên DaiChungCapital đều được thẩm định sơ bộ (Pre-Screening), chuẩn hóa cấu trúc SPV/Tài chính và bảo vệ danh tính tuyệt đối theo quy chế Blind Teaser.',
      searchPlaceholder: 'Tìm theo mã thương vụ, phân khúc, vị trí (VD: Thủ Thiêm, KCN, Y tế, COD)...',
      deployBtn: '+ Triển khai Sản phẩm M&A Mới',
      resetBtn: 'Đặt lại bộ lọc',
      resultsCount: (n) => `Đang hiển thị ${n} thương vụ M&A đã xác thực`,
      sectors: {
        all: 'Tất cả Lĩnh vực',
        real_estate: 'BĐS Đô thị & Thương mại',
        industrial: 'KCN & Kho vận Cảng',
        manufacturing: 'Sản xuất & Công nghiệp',
        hospitality: 'Khách sạn & Nghỉ dưỡng',
        healthcare: 'Y tế & Bệnh viện',
        energy: 'Năng lượng Tái tạo',
      },
      structures: {
        all: 'Mọi Cấu trúc Giao dịch',
        equity_acquisition: 'Mua cổ phần chi phối (Buyout)',
        asset_transfer: 'Chuyển nhượng Dự án / Tài sản',
        jv_strategic: 'Liên doanh Chiến lược (JV)',
        growth_capital: 'Vốn Tăng trưởng (Strategic Equity)',
      },
      stages: {
        all: 'Mọi Trạng thái',
        open_nda: 'Đang mở ký NDA',
        in_vdr: 'Đang thẩm định VDR',
        accepting_loi: 'Đang nhận Thư LOI',
        closing: 'Giai đoạn Đóng giao dịch',
      },
      labels: {
        structureFilter: 'Cấu trúc giao dịch',
        stageFilter: 'Giai đoạn quy trình',
        ticketSize: 'Quy mô Thương vụ',
        equityOffered: 'Tỷ lệ Chào bán',
        targetIRR: 'IRR Kỳ vọng',
        scaleOrEbitda: 'Quy mô / EBITDA',
        multiple: 'Hệ số Định giá',
        verifiedBadge: 'Pháp lý Đã Xác thực',
        ndaBadge: 'Yêu cầu NDA',
        featuredBadge: 'Thương vụ Trọng điểm',
        viewTeaserBtn: 'Xem Hồ sơ Teaser & VDR',
        requestVdrBtn: 'Ký NDA / Gửi LOI',
        emptyTitle: 'Không tìm thấy sản phẩm M&A phù hợp bộ lọc',
        emptyDesc: 'Vui lòng mở rộng tiêu chí tìm kiếm hoặc gửi Đầu bài Săn tìm Tài sản riêng (Buy-Side Mandate) cho Hội đồng Đầu tư của chúng tôi.',
      },
    },
    advisory: {
      eyebrow: 'BESPOKE INVESTMENT BANKING CAPABILITIES',
      title: 'Hệ Giải pháp Tư vấn & Triển khai M&A Toàn diện',
      subtitle:
        'Kết hợp năng lực Ngân hàng Đầu tư chuẩn quốc tế với sự am hiểu sâu sắc hành lang pháp lý, cấu trúc đất đai và văn hóa doanh nghiệp bản địa.',
      cards: [
        {
          code: '01 · SELL-SIDE M&A',
          title: 'Tư vấn Thoái vốn & Đóng gói Sản phẩm M&A',
          desc: 'Tái cấu trúc hồ sơ pháp lý - tài chính, lập Bản chào Thông tin (CIM), định giá tối ưu và tổ chức đấu thầu kín với các nhà đầu tư ngoại.',
          bullets: [
            'Chuẩn hóa SPV sạch & Rà soát rủi ro trước chào bán (Vendor DD)',
            'Xây dựng Blind Teaser, CIM & Mô hình Tài chính đa kịch bản',
            'Đàm phán điều khoản SPA, Bảo lãnh Thanh toán Escrow & Earn-out',
          ],
        },
        {
          code: '02 · BUY-SIDE ORIGINATION',
          title: 'Săn tìm Tài sản Off-Market & Thâu tóm Chiến lược',
          desc: 'Đại diện các Quỹ đầu tư, Tập đoàn đa quốc gia tiếp cận nguồn dự án và doanh nghiệp độc quyền chưa từng công bố rộng rãi ngoài thị trường.',
          bullets: [
            'Sàng lọc mục tiêu theo đúng khẩu vị IRR, quy mô và tiêu chuẩn ESG',
            'Thẩm định thực địa, quy hoạch, pháp lý đất đai & chất lượng lợi nhuận (QoE)',
            'Thiết kế cấu trúc sở hữu nước ngoài (FOL) tối ưu thuế và dòng vốn hồi hương',
          ],
        },
        {
          code: '03 · CAPITAL & JV STRUCTURING',
          title: 'Cấu trúc Vốn, Liên doanh JV & Tái cơ cấu Nợ',
          desc: 'Giải quyết bài toán thanh khoản và vốn phát triển dự án thông qua cổ phần ưu đãi, trái phiếu chuyển đổi, Mezzanine Debt hoặc liên doanh đồng phát triển.',
          bullets: [
            'Thu xếp vốn tín dụng xanh & tái tài trợ nợ ngân hàng quốc tế',
            'Thiết lập Thỏa thuận Cổ đông (SHA) cân bằng quyền kiểm soát',
            'Định giá độc lập theo tiêu chuẩn RICS & IFRS quốc tế',
          ],
        },
        {
          code: '04 · DIGITAL VDR & GOVERNANCE',
          title: 'Phòng Dữ liệu Ảo (VDR) & Quản trị Hậu M&A',
          desc: 'Số hóa toàn bộ quy trình thẩm định bảo mật nhiều lớp, rút ngắn 40% thời gian Due Diligence và đồng hành chuyển giao vận hành sau khi đóng thương vụ.',
          bullets: [
            'Phân quyền truy cập tài liệu theo cấp độ NDA & đóng dấu Watermark động',
            'Phối hợp đồng bộ cùng các hãng Luật & Kiểm toán Big4',
            'Quản trị tích hợp hậu sáp nhập (PMI) 100 ngày đầu tiên',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'STANDARDIZED INSTITUTIONAL WORKFLOW',
      title: 'Quy trình Giao dịch M&A 5 Bước Chuẩn hóa',
      subtitle:
        'Được thiết kế dựa trên kỷ luật bảo mật nghiêm ngặt của Ngân hàng Đầu tư định chế, đảm bảo an toàn pháp lý và tối đa hóa tỷ lệ khớp lệnh thành công.',
      steps: [
        {
          step: 'BƯỚC 01',
          tag: 'SOURCING & PACKAGING',
          title: 'Thẩm định Sơ bộ & Đóng gói Đầu bài',
          desc: 'Rà soát tính pháp lý quyền sử dụng đất/cổ phần, kiểm toán sơ bộ dòng tiền, chuẩn hóa định giá và phát hành Hồ sơ Blind Teaser ẩn danh.',
          deliverable: 'Đầu ra: Blind Teaser + Xác thực Pháp lý Cấp 1',
        },
        {
          step: 'BƯỚC 02',
          tag: 'NDA & STRATEGIC MATCHING',
          title: 'Ký kết NDA & Kết nối Chọn lọc',
          desc: 'Đối chiếu khẩu vị đầu tư với mạng lưới hơn 340 Quỹ PE và Tập đoàn chiến lược; thực hiện ký Thỏa thuận Bảo mật (NDA) hai chiều trước khi mở tên dự án.',
          deliverable: 'Đầu ra: NDA Đã Ký + Bản chào Thông tin (CIM)',
        },
        {
          step: 'BƯỚC 03',
          tag: 'VIRTUAL DATA ROOM & DD',
          title: 'Mở Phòng Dữ liệu Ảo & Thẩm định Chuyên sâu',
          desc: 'Cấp quyền truy cập VDR bảo mật để đội ngũ Luật sư, Kiểm toán và Kỹ thuật rà soát toàn diện Pháp lý – Tài chính – Thuế – Môi trường & Khảo sát thực địa.',
          deliverable: 'Đầu ra: Báo cáo Due Diligence & Q&A Log',
        },
        {
          step: 'BƯỚC 04',
          tag: 'LOI & SPA STRUCTURING',
          title: 'Thư Ý định LOI & Cấu trúc Hợp đồng',
          desc: 'Tiếp nhận Thư bày tỏ ý định (LOI/NBO), đàm phán độc quyền điều khoản thương mại, cấu trúc thuế, cơ chế điều chỉnh giá và ký Hợp đồng Chuyển nhượng (SPA/SHA).',
          deliverable: 'Đầu ra: Binding LOI + Ký kết SPA / SHA',
        },
        {
          step: 'BƯỚC 05',
          tag: 'ESCROW CLOSING & PMI',
          title: 'Giải ngân Escrow & Chuyển giao Hậu M&A',
          desc: 'Hoàn tất các điều kiện tiên quyết (Conditions Precedent), thanh toán qua tài khoản phong tỏa ngân hàng quốc tế (Escrow) và bàn giao quyền điều hành.',
          deliverable: 'Đầu ra: Hoàn tất Chuyển nhượng & Tích hợp PMI',
        },
      ],
    },
    ecosystem: {
      eyebrow: 'THREE-PILLAR CAPITAL ECOSYSTEM',
      title: 'Hệ sinh thái Kết nối 3 Chủ thể Xác thực',
      subtitle:
        'Mô hình mạng lưới thành viên kiểm duyệt chặt chẽ giúp loại bỏ nhiễu loạn thông tin trung gian và bảo vệ uy tín cho từng thương vụ.',
      roles: [
        {
          id: 'buy_side',
          badge: 'BUY-SIDE · NHÀ ĐẦU TƯ',
          title: 'Quỹ Đầu tư Định chế, Tập đoàn & Family Office',
          subtitle: 'Tiếp cận trực tiếp nguồn tài sản & doanh nghiệp sạch đã qua sàng lọc.',
          benefits: [
            'Nhận thông báo ưu tiên các thương vụ Off-Market theo đúng khẩu vị ngành & quy mô vốn',
            'Truy cập hồ sơ CIM, mô hình tài chính DCF và dữ liệu pháp lý chuẩn hóa đa ngôn ngữ VI/EN/ZH',
            'Hỗ trợ trọn gói thủ tục phê duyệt M&A nước ngoài, ngoại hối và cấu trúc SPV Singapore/HK',
          ],
          cta: 'Đăng ký Tư cách Nhà Đầu tư Định chế',
        },
        {
          id: 'sell_side',
          badge: 'SELL-SIDE · CHỦ TÀI SẢN',
          title: 'Chủ Dự án Bất động sản & Nhà Sáng lập Doanh nghiệp',
          subtitle: 'Triển khai thoái vốn hoặc gọi vốn chiến lược kín đáo, đúng giá trị thực.',
          benefits: [
            'Bảo mật tuyệt đối thương hiệu, nhân sự và hoạt động kinh doanh nhờ cơ chế Blind Teaser',
            'Được đội ngũ chuyên gia chuẩn hóa lại hồ sơ pháp lý và tối ưu câu chuyện tăng trưởng định giá',
            'Chỉ làm việc trực tiếp với nhà đầu tư đã chứng minh năng lực tài chính (Proof of Funds)',
          ],
          cta: 'Ủy thác Triển khai Sản phẩm M&A',
        },
        {
          id: 'advisor_partner',
          badge: 'MANDATED PARTNER · ĐỐI TÁC M&A',
          title: 'Đối tác Tư vấn Chiến lược, Luật, Kiểm toán & Đại diện Độc quyền',
          subtitle: 'Hợp tác đồng tư vấn (Co-Advisory) minh bạch phí thành công và bảo vệ nguồn khách.',
          benefits: [
            'Cơ chế ghi nhận bản quyền nguồn thương vụ/nhà đầu tư bằng văn bản pháp lý rõ ràng',
            'Sử dụng hạ tầng Phòng dữ liệu ảo VDR và bộ phận Phân tích Đầu tư của DaiChungCapital',
            'Chia sẻ cấu trúc phí thành công (Success Fee) chuẩn thông lệ Ngân hàng Đầu tư quốc tế',
          ],
          cta: 'Đăng ký Đối tác Liên minh M&A',
        },
      ],
    },
    tombstones: {
      eyebrow: 'PROVEN CROSS-BORDER EXECUTION',
      title: 'Dấu ấn Thương vụ & Hành lang Vốn Quốc tế',
      subtitle:
        'Năng lực triển khai thực chiến trên các hành lang dòng vốn sôi động nhất Châu Á: Việt Nam ⇄ Singapore · Trung Quốc Đại lục / Hồng Kông / Đài Loan · Nhật Bản · Hàn Quốc.',
      corridorsTitle: 'Lợi thế Cầu nối Đa Ngôn ngữ (Việt – Anh – Trung)',
      corridorsDesc:
        'Đội ngũ Giám đốc Khối M&A của DaiChungCapital làm việc trực tiếp bằng 3 ngôn ngữ tài chính – pháp lý (Tiếng Việt, Tiếng Anh, Tiếng Trung), xóa bỏ rào cản đàm phán giữa Chủ tài sản nội địa và Hội đồng Đầu tư quốc tế.',
    },
    modal: {
      confidentialHeader: 'HỒ SƠ THƯƠNG VỤ BẢO MẬT · BLIND TEASER',
      tabs: {
        overview: '01. Tóm tắt Đầu tư & Pháp lý',
        vdr: '02. Danh mục Hồ sơ VDR',
        ndaLoi: '03. Ký NDA / Gửi Yêu cầu LOI',
      },
      execSummary: 'Luận điểm Đầu tư Cốt lõi (Executive Summary)',
      investmentHighlights: 'Điểm nhấn Thương vụ & Giá trị Gia tăng',
      legalReadiness: 'Danh mục Pháp lý & Kiểm toán Đã Xác thực',
      idealBuyer: 'Chân dung Nhà đầu tư Phù hợp',
      vdrTitle: 'Cấu trúc Phòng Dữ liệu Ảo (Virtual Data Room Index)',
      vdrLockedNote:
        'Tài liệu gốc được mã hóa và đóng dấu Watermark định danh. Vui lòng hoàn tất xác nhận NDA điện tử ở thẻ kế bên để nhận quyền truy cập VDR và tải Bản chào CIM đầy đủ.',
      unlockBtn: 'Chuyển đến Xác nhận NDA & Mở khóa VDR',
      ndaFormTitle: 'Yêu cầu Ký NDA Điện tử & Truy cập Hồ sơ Chi tiết',
      ndaFormSubtitle:
        'Thông tin của Quý đối tác được bảo mật tuyệt đối bởi Hội đồng Thẩm định DaiChungCapital. Chuyên viên phụ trách thương vụ (Managing Director) sẽ phản hồi trong vòng 4 giờ làm việc.',
      fields: {
        fullName: 'Họ và Tên Người đại diện *',
        organization: 'Tên Quỹ đầu tư / Tập đoàn / Pháp nhân *',
        roleType: 'Tư cách Tham gia Thương vụ',
        roleOptions: [
          'Quỹ Đầu tư PE / Institutional Fund (Principal)',
          'Tập đoàn Đầu tư Chiến lược (Corporate Buyer)',
          'Family Office / Nhà đầu tư Cá nhân Ultra-HNWI',
          'Đơn vị Tư vấn M&A được Ủy quyền (Mandated Buy-Side Advisor)',
        ],
        email: 'Email Công vụ (Corporate Email) *',
        phone: 'Số Điện thoại / WhatsApp / WeChat *',
        capitalCapacity: 'Quy mô Vốn Giải ngân Dự kiến (USD)',
        intentType: 'Yêu cầu Thực hiện Ngay',
        intentOptions: [
          'Ký NDA Điện tử & Nhận Bản chào Thông tin (CIM)',
          'Yêu cầu Cấp quyền Phòng Dữ liệu Ảo (VDR Access)',
          'Đặt lịch Họp Kín với Giám đốc Thương vụ (Private Briefing)',
          'Thảo luận Dự thảo Thư Ý định Mua (Indicative LOI)',
        ],
        agreeNda:
          'Tôi cam kết giữ bí mật tuyệt đối mọi thông tin nhận được về thương vụ này và xác nhận có đủ thẩm quyền đại diện tổ chức.',
        submitNda: 'Gửi Yêu cầu Ký NDA & Mở Hồ sơ',
        successTitle: 'Đã Ghi nhận Yêu cầu NDA & Cấp Mã Tham chiếu VDR',
        successDesc:
          'Hệ thống Quản trị Thương vụ DaiChungCapital đã khởi tạo hồ sơ NDA cho tổ chức của Quý vị. Bạn có thể tải Bản tóm tắt Blind Teaser ngay bên dưới trong khi chờ cấp tài khoản VDR đầy đủ.',
        downloadTeaserBtn: 'Tải Bản Tóm tắt Blind Teaser (.TXT/Dossier)',
      },
    },
    deployModal: {
      badge: 'QUẢN TRỊ DANH MỤC · DEPLOY NEW M&A MANDATE',
      title: 'Triển khai / Đăng tải Sản phẩm M&A Mới',
      subtitle:
        'Công cụ dành cho Ban Điều hành DaiChungCapital hoặc Chủ tài sản khởi tạo nhanh một sản phẩm M&A chuẩn Blind Teaser lên danh mục trực tuyến (hỗ trợ hiển thị ngay lập tức).',
      codenameLabel: 'Tên mã Dự án Ẩn danh (VD: PROJECT CROWN PLAZA)',
      projectTitleLabel: 'Tiêu đề Sản phẩm M&A',
      sectorLabel: 'Lĩnh vực / Phân khúc',
      structureLabel: 'Cấu trúc Chào bán',
      locationLabel: 'Khu vực Địa lý',
      ticketLabel: 'Quy mô Thương vụ (VD: $45.0M – $55.0M)',
      equityLabel: 'Tỷ lệ Cổ phần / Tài sản Chào bán (VD: 51% – 100%)',
      irrLabel: 'IRR Mục tiêu (VD: 18.5% – 22.0%)',
      scaleLabel: 'Quy mô / Chỉ số EBITDA (VD: 12 ha · EBITDA $6.4M)',
      summaryLabel: 'Tóm tắt Luận điểm Đầu tư & Pháp lý',
      highlight1Label: 'Điểm nhấn Độc quyền nổi bật nhất',
      submitBtn: 'Xuất bản lên Danh mục M&A',
      cancelBtn: 'Hủy bỏ',
      publishedToast: 'Đã triển khai sản phẩm M&A mới thành công lên Danh mục!',
    },
    contact: {
      eyebrow: 'PRIVATE MANDATE DESK',
      title: 'Khởi tạo Thương vụ Bảo mật cùng DaiChungCapital',
      subtitle:
        'Dành cho Chủ doanh nghiệp/Chủ dự án muốn triển khai M&A sản phẩm kín đáo, hoặc Nhà đầu tư định chế đang tìm kiếm tài sản chiến lược tại Việt Nam & Đông Nam Á.',
      desksTitle: 'Văn phòng Đại diện & Bàn Giao dịch Khu vực',
      desks: [
        {
          city: 'TP. Hồ Chí Minh · Trụ sở Chính',
          address: 'Tầng 28, Khu Tài chính Quốc tế Thủ Thiêm / Quận 1, TP. Hồ Chí Minh',
          deskType: 'Vietnam Origination & Execution Desk',
        },
        {
          city: 'Hà Nội · Văn phòng Miền Bắc',
          address: 'Phố Lý Thường Kiệt, Quận Hoàn Kiếm, Thủ đô Hà Nội',
          deskType: 'Industrial, Infrastructure & Gov Relations Desk',
        },
        {
          city: 'Singapore & Greater China Desk',
          address: 'Marina Bay Financial Centre · Kết nối Hồng Kông, Thượng Hải & Đài Bắc',
          deskType: 'Cross-Border Capital & Offshore SPV Structuring',
        },
      ],
      confidentialPromiseTitle: 'Cam kết Giao thức Bảo mật Cấp Định chế',
      confidentialPromiseDesc:
        'Mọi đầu bài gửi tới DaiChungCapital được phân luồng trực tiếp đến Partner phụ trách ngành, không qua trung gian tự do, tuân thủ tiêu chuẩn tường lửa thông tin (Chinese Wall).',
      form: {
        mandateType: 'Loại hình Yêu cầu Hợp tác',
        mandateOptions: [
          'Ủy thác Bán Dự án / Thoái vốn Doanh nghiệp (Sell-Side Mandate)',
          'Ủy thác Săn tìm Mua Tài sản / Doanh nghiệp (Buy-Side Mandate)',
          'Đề xuất Liên doanh Phát triển / Huy động Vốn Chiến lược (JV / Capital)',
          'Đăng ký Hợp tác Liên minh Tư vấn M&A Quốc tế',
        ],
        name: 'Họ và Tên Lãnh đạo *',
        company: 'Tên Công ty / Quỹ Đầu tư *',
        position: 'Chức danh (Chủ tịch / TGĐ / Giám đốc Đầu tư)',
        email: 'Email Liên hệ Bảo mật *',
        phone: 'Số Điện thoại Trực tiếp / WhatsApp / WeChat / Zalo *',
        estimatedValue: 'Quy mô Thương vụ Dự kiến (USD)',
        message: 'Tóm tắt Đầu bài Sản phẩm M&A hoặc Khẩu vị Đầu tư *',
        submit: 'Gửi Hồ sơ Ủy thác Bảo mật',
        submittedTitle: 'Hồ sơ Ủy thác Đã Được Mã hóa & Chuyển tới Ban Giám đốc',
        submittedDesc:
          'Cảm ơn Quý Đối tác đã tin tưởng DaiChungCapital. Giám đốc Khối M&A phụ trách phân khúc sẽ liên hệ trực tiếp qua kênh bảo mật trong vòng 4–12 giờ tới.',
      },
    },
    footer: {
      description:
        'DaiChungCapital là định chế chuyên biệt trong lĩnh vực Tư vấn Mua bán & Sáp nhập (M&A), Cấu trúc Vốn Chiến lược và Vận hành Nền tảng Giao dịch Tài sản Định chế đa ngôn ngữ (Việt – Anh – Trung).',
      colPlatform: 'Danh mục Trọng tâm',
      colSolutions: 'Dịch vụ Ngân hàng Đầu tư',
      colCompliance: 'Tiêu chuẩn & Tuân thủ',
      complianceItems: [
        'Quy chuẩn Bảo mật NDA Song phương',
        'Xác thực Nguồn vốn (AML / KYC / Proof of Funds)',
        'Chuẩn Báo cáo Tài chính IFRS & Định giá RICS',
        'Hỗ trợ Đàm phán 3 Ngôn ngữ: VI · EN · 中文',
      ],
      disclaimer:
        'TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM ĐỊNH CHẾ: Các thông tin thương vụ trên website này được trình bày dưới dạng Hồ sơ Ẩn danh (Blind Teaser) chỉ nhằm mục đích giới thiệu năng lực và kết nối với Nhà đầu tư Chuyên nghiệp / Định chế đủ điều kiện. Đây không phải là lời chào bán chứng khoán ra công chúng.',
      copyright: '© 2026 DaiChungCapital (Đại Chúng Capital). Bảo lưu mọi quyền sở hữu trí tuệ.',
    },
  },

  en: {
    brandSub: 'INSTITUTIONAL M&A & CAPITAL',
    nav: {
      pipeline: 'M&A Mandates',
      advisory: 'Advisory Solutions',
      process: '5-Stage Process',
      ecosystem: 'Ecosystem',
      tombstones: 'Track Record',
      contact: 'Private Mandate',
      deployProduct: 'Deploy M&A Mandate',
      investorPortal: 'Data Room (VDR)',
    },
    hero: {
      badge: 'CROSS-BORDER INSTITUTIONAL M&A & STRATEGIC CAPITAL PLATFORM',
      titleLine1: 'Architecting Premier',
      titleHighlight: 'M&A Transactions',
      titleLine2: '& Global Capital Flows',
      subtitle:
        'DaiChungCapital discreetly connects Vietnam’s premier asset owners and market-leading enterprises with global Private Equity funds, Sovereign Institutions, and Strategic Corporates through a disciplined Blind Teaser – NDA – VDR – LOI execution framework.',
      ctaExplore: 'Explore Active M&A Pipeline',
      ctaSubmitMandate: 'Submit Sell-Side / Buy-Side Mandate',
      securityNote: '100% NDA-Protected Blind Teasers · Pre-Vetted Legal Titles & Audited Financials',
      stats: {
        volumeLabel: 'Aggregate M&A Deal Pipeline',
        volumeValue: '$2.48B+',
        mandatesLabel: 'Active Exclusive Mandates',
        mandatesValue: '26 Mandates',
        investorsLabel: 'Institutional PE & Strategic Buyers',
        investorsValue: '340+ Partners',
        closingLabel: 'Legal & VDR Pre-Verification',
        closingValue: '100% Vetted',
      },
    },
    pipeline: {
      eyebrow: 'CURATED M&A DEAL PIPELINE',
      title: 'Select M&A Products & Exclusive Mandates',
      subtitle:
        'Every mandate listed on DaiChungCapital undergoes rigorous commercial, legal, and SPV pre-screening while maintaining strict sponsor anonymity under our institutional Blind Teaser protocol.',
      searchPlaceholder: 'Search by deal code, sector, city, or keyword (e.g., CBD, Logistics, COD, ISO)...',
      deployBtn: '+ Deploy New M&A Product',
      resetBtn: 'Reset Filters',
      resultsCount: (n) => `Showing ${n} verified institutional M&A mandates`,
      sectors: {
        all: 'All Sectors',
        real_estate: 'Urban & Commercial Real Estate',
        industrial: 'Industrial Parks & Port Logistics',
        manufacturing: 'Precision Manufacturing',
        hospitality: 'Luxury Hospitality & Resorts',
        healthcare: 'Hospitals & Healthcare',
        energy: 'Clean Energy & Infrastructure',
      },
      structures: {
        all: 'All Deal Structures',
        equity_acquisition: 'Controlling Buyout (Equity)',
        asset_transfer: 'Whole-Asset / Project Transfer',
        jv_strategic: 'Strategic Joint Venture (JV)',
        growth_capital: 'Strategic Growth Equity',
      },
      stages: {
        all: 'All Deal Stages',
        open_nda: 'Open for NDA',
        in_vdr: 'Active VDR Due Diligence',
        accepting_loi: 'Accepting Indicative LOIs',
        closing: 'Exclusivity / Closing',
      },
      labels: {
        structureFilter: 'Transaction Structure',
        stageFilter: 'Execution Stage',
        ticketSize: 'Deal Ticket Size',
        equityOffered: 'Stake Offered',
        targetIRR: 'Target IRR',
        scaleOrEbitda: 'Asset Scale / EBITDA',
        multiple: 'Valuation Metric',
        verifiedBadge: 'Pre-Vetted Legal',
        ndaBadge: 'NDA Required',
        featuredBadge: 'Flagship Mandate',
        viewTeaserBtn: 'Inspect Blind Teaser & VDR',
        requestVdrBtn: 'Execute NDA / Submit LOI',
        emptyTitle: 'No M&A mandates match your selected criteria',
        emptyDesc: 'Broaden your filters above or submit a bespoke Buy-Side Origination Mandate directly to our Investment Committee.',
      },
    },
    advisory: {
      eyebrow: 'BESPOKE INVESTMENT BANKING CAPABILITIES',
      title: 'End-to-End M&A Product Structuring & Advisory',
      subtitle:
        'Combining bulge-bracket transaction discipline with deep on-the-ground mastery of regulatory approvals, land tenure structuring, and cross-border capital execution.',
      cards: [
        {
          code: '01 · SELL-SIDE M&A',
          title: 'Sell-Side Divestiture & Asset Packaging',
          desc: 'We prepare assets for institutional scrutiny—structuring clean SPVs, authoring compelling CIMs, optimizing valuation, and running confidential competitive auctions.',
          bullets: [
            'SPV ring-fencing & Vendor Legal/Financial Due Diligence prep',
            'Institutional Blind Teasers, CIMs & dynamic DCF modeling',
            'SPA negotiation, Escrow tranche mechanics & Earn-out alignment',
          ],
        },
        {
          code: '02 · BUY-SIDE ORIGINATION',
          title: 'Off-Market Deal Sourcing & Control Acquisitions',
          desc: 'Representing international PE funds and corporate acquirers to unlock proprietary, off-market real estate and corporate buyout targets across Vietnam.',
          bullets: [
            'Thematic target screening aligned with IRR, ticket size & ESG',
            'On-site commercial, zoning, title & Quality of Earnings (QoE) review',
            'Foreign Ownership Limit (FOL), offshore SPV & tax optimization',
          ],
        },
        {
          code: '03 · CAPITAL & JV STRUCTURING',
          title: 'Structured Capital, Joint Ventures & Debt Advisory',
          desc: 'Tailored balance-sheet solutions spanning preferred equity, convertible instruments, mezzanine credit, and co-development joint ventures.',
          bullets: [
            'International green syndicate debt & project refinancing',
            'Balanced Shareholders’ Agreements (SHA) & governance protection',
            'Independent RICS property & IFRS corporate valuations',
          ],
        },
        {
          code: '04 · DIGITAL VDR & GOVERNANCE',
          title: 'Encrypted Virtual Data Room & Post-Merger Integration',
          desc: 'Streamlined digital due diligence rooms with dynamic watermarking that cut transaction timelines by 40%, backed by 100-day post-closing execution support.',
          bullets: [
            'Tiered NDA permissioning & real-time audit trail tracking',
            'Seamless coordination with Big-4 auditors & international counsel',
            '100-day Post-Merger Integration (PMI) & management transition',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'STANDARDIZED INSTITUTIONAL WORKFLOW',
      title: 'Disciplined 5-Stage M&A Transaction Protocol',
      subtitle:
        'Engineered to eliminate execution friction, safeguard seller confidentiality, and provide institutional buyers with bankable transparency.',
      steps: [
        {
          step: 'STAGE 01',
          tag: 'SOURCING & PACKAGING',
          title: 'Mandate Pre-Screening & Packaging',
          desc: 'Comprehensive audit of land titles, corporate charters, and historical cash flows to structure a bankable asset package and Blind Teaser.',
          deliverable: 'Output: Verified Blind Teaser + Tier-1 Legal Check',
        },
        {
          step: 'STAGE 02',
          tag: 'NDA & STRATEGIC MATCHING',
          title: 'Curated Investor Matching & Mutual NDA',
          desc: 'Confidential outreach to pre-qualified PE funds and strategic acquirers; execution of binding NDAs prior to identity disclosure.',
          deliverable: 'Output: Executed NDA + Full CIM Release',
        },
        {
          step: 'STAGE 03',
          tag: 'VIRTUAL DATA ROOM & DD',
          title: 'VDR Access & Comprehensive Due Diligence',
          desc: 'Granular Virtual Data Room access enabling legal, tax, financial (QoE), and technical advisors to complete confirmatory due diligence and site inspections.',
          deliverable: 'Output: Confirmatory DD Reports & Management Q&A',
        },
        {
          step: 'STAGE 04',
          tag: 'LOI & SPA STRUCTURING',
          title: 'Indicative LOI, Exclusivity & SPA Signing',
          desc: 'Evaluation of Letters of Intent (LOI/NBO), granting exclusivity, structuring cross-border tax/SPV mechanics, and executing definitive SPA/SHA.',
          deliverable: 'Output: Binding Term Sheet + Definitive SPA / SHA',
        },
        {
          step: 'STAGE 05',
          tag: 'ESCROW CLOSING & PMI',
          title: 'Escrow Settlement & Post-Merger Integration',
          desc: 'Satisfaction of Conditions Precedent (CPs), M&A regulatory clearance, international bank Escrow disbursement, and governance handover.',
          deliverable: 'Output: Financial Closing & 100-Day PMI Plan',
        },
      ],
    },
    ecosystem: {
      eyebrow: 'THREE-PILLAR CAPITAL ECOSYSTEM',
      title: 'A Vetted Network Built on Principal Alignment',
      subtitle:
        'Unlike fragmented broker marketplaces, DaiChungCapital operates a closed-loop ecosystem eliminating unauthorized intermediaries and deal leakage.',
      roles: [
        {
          id: 'buy_side',
          badge: 'BUY-SIDE · INSTITUTIONAL INVESTORS',
          title: 'Private Equity Funds, Corporates & Family Offices',
          subtitle: 'Direct principal access to pre-vetted, institutionally packaged opportunities.',
          benefits: [
            'Priority early-look alerts on proprietary off-market mandates matching your thesis',
            'Trilingual (EN / VI / ZH) CIMs, dynamic Excel financial models, and reconciled IFRS financials',
            'End-to-end regulatory M&A approval, FX registration, and Singapore/HK holding structuring',
          ],
          cta: 'Apply for Institutional Buyer Access',
        },
        {
          id: 'sell_side',
          badge: 'SELL-SIDE · ASSET & BUSINESS OWNERS',
          title: 'Real Estate Developers & Enterprise Founders',
          subtitle: 'Execute discreet divestitures or strategic capital raises at optimal multiples.',
          benefits: [
            'Strict corporate anonymity safeguarding brand equity, staff, and ongoing operations',
            'Full institutional packaging of legal titles, SPV clean-up, and equity story positioning',
            'Direct engagement strictly limited to investors with verified Proof of Funds (PoF)',
          ],
          cta: 'Mandate DaiChungCapital to Deploy Asset',
        },
        {
          id: 'advisor_partner',
          badge: 'MANDATED PARTNER · CO-ADVISORS',
          title: 'Investment Boutiques, Legal Counsel & Mandated Advisors',
          subtitle: 'Transparent institutional co-advisory mandates with ironclad client protection.',
          benefits: [
            'Legally binding mandate registration and non-circumvention protection agreements',
            'Full access to DaiChungCapital’s encrypted VDR infrastructure and execution analysts',
            'International-standard co-advisory fee sharing governed by transparent engagement letters',
          ],
          cta: 'Join Global M&A Advisory Alliance',
        },
      ],
    },
    tombstones: {
      eyebrow: 'PROVEN CROSS-BORDER EXECUTION',
      title: 'Selected Closed Tombstones & Capital Corridors',
      subtitle:
        'Deep execution track record across Asia’s primary deal corridors: Vietnam ⇄ Singapore · Greater China (Mainland, Hong Kong, Taiwan) · Japan · South Korea.',
      corridorsTitle: 'Seamless Trilingual Execution (English · Vietnamese · Chinese)',
      corridorsDesc:
        'Our Managing Directors negotiate natively across English, Vietnamese, and Mandarin financial-legal frameworks—bridging valuation expectations and regulatory nuances between domestic sponsors and global Investment Committees.',
    },
    modal: {
      confidentialHeader: 'CONFIDENTIAL M&A MANDATE · BLIND TEASER',
      tabs: {
        overview: '01. Investment Thesis & Legal',
        vdr: '02. Virtual Data Room Index',
        ndaLoi: '03. Execute NDA / Submit LOI',
      },
      execSummary: 'Executive Investment Summary',
      investmentHighlights: 'Key Transaction Highlights & Value Creation',
      legalReadiness: 'Verified Legal, Title & Audit Readiness',
      idealBuyer: 'Target Acquirer / Investor Profile',
      vdrTitle: 'Encrypted Virtual Data Room (VDR) Dossier Index',
      vdrLockedNote:
        'Underlying primary documents are encrypted and dynamically watermarked. Complete the digital NDA request in the adjacent tab to receive VDR credentials and the full Confidential Information Memorandum (CIM).',
      unlockBtn: 'Proceed to Digital NDA & Unlock VDR',
      ndaFormTitle: 'Digital NDA Execution & VDR Access Request',
      ndaFormSubtitle:
        'Submissions are routed directly under strict confidentiality to the Mandate Managing Director. Verified institutional principals receive VDR credentials within 4 business hours.',
      fields: {
        fullName: 'Authorized Signatory Full Name *',
        organization: 'Fund / Corporation / Legal Entity Name *',
        roleType: 'Capacity in Transaction',
        roleOptions: [
          'Private Equity / Institutional Fund (Principal)',
          'Strategic Corporate Acquirer (Principal)',
          'Single / Multi-Family Office (Principal)',
          'Exclusively Mandated Buy-Side Financial Advisor',
        ],
        email: 'Corporate Work Email *',
        phone: 'Direct Mobile / WhatsApp / WeChat *',
        capitalCapacity: 'Target Equity Deployment Ticket (USD)',
        intentType: 'Immediate Action Requested',
        intentOptions: [
          'Execute Mutual NDA & Receive Full CIM',
          'Request Encrypted Virtual Data Room (VDR) Access',
          'Schedule Private Briefing with Managing Director',
          'Discuss Indicative Non-Binding Offer (NBO / LOI)',
        ],
        agreeNda:
          'I confirm non-disclosure obligations regarding this mandate and warrant authority to represent the stated institution.',
        submitNda: 'Submit NDA Request & Unlock Dossier',
        successTitle: 'NDA Request Logged & VDR Reference Issued',
        successDesc:
          'DaiChungCapital Deal Desk has registered your institutional inquiry. You may immediately download the Blind Teaser Brief below while our compliance team activates your VDR room.',
        downloadTeaserBtn: 'Download Executive Blind Teaser (.TXT)',
      },
    },
    deployModal: {
      badge: 'PORTFOLIO ADMIN · DEPLOY NEW M&A MANDATE',
      title: 'Deploy / Publish New M&A Product Mandate',
      subtitle:
        'Designed for DaiChungCapital Managing Directors or Asset Sponsors to structure and publish a new Blind Teaser M&A product directly onto the live pipeline.',
      codenameLabel: 'Confidential Project Codename (e.g., PROJECT CROWN)',
      projectTitleLabel: 'M&A Product Headline Title',
      sectorLabel: 'Industry Sector',
      structureLabel: 'Transaction Structure',
      locationLabel: 'Geographic Location',
      ticketLabel: 'Deal Ticket Size (e.g., $45.0M – $55.0M)',
      equityLabel: 'Equity / Asset Stake Offered (e.g., 51% – 100%)',
      irrLabel: 'Projected Target IRR (e.g., 18.5% – 22.0%)',
      scaleLabel: 'Asset Scale / EBITDA Metric (e.g., 12 ha · EBITDA $6.4M)',
      summaryLabel: 'Executive Investment Thesis & Legal Status',
      highlight1Label: 'Primary Value Creation Highlight',
      submitBtn: 'Publish to Live M&A Pipeline',
      cancelBtn: 'Cancel',
      publishedToast: 'New M&A Product Mandate successfully deployed to the live pipeline!',
    },
    contact: {
      eyebrow: 'PRIVATE MANDATE DESK',
      title: 'Initiate a Confidential Mandate with DaiChungCapital',
      subtitle:
        'Whether deploying an exclusive asset for divestiture or originating strategic acquisitions in Vietnam & ASEAN, engage directly with our Senior Partners.',
      desksTitle: 'Regional Execution Desks & Offices',
      desks: [
        {
          city: 'Ho Chi Minh City · Headquarters',
          address: 'Level 28, Thu Thiem Financial Core / District 1, Ho Chi Minh City',
          deskType: 'Vietnam Origination & Execution Desk',
        },
        {
          city: 'Hanoi · Northern Advisory Desk',
          address: 'Ly Thuong Kiet Boulevard, Hoan Kiem District, Hanoi',
          deskType: 'Industrial, Infrastructure & Regulatory Desk',
        },
        {
          city: 'Singapore & Greater China Desk',
          address: 'Marina Bay Financial Centre · Hong Kong, Shanghai & Taipei Coverage',
          deskType: 'Cross-Border Capital & Offshore SPV Structuring',
        },
      ],
      confidentialPromiseTitle: 'Institutional Chinese-Wall Confidentiality',
      confidentialPromiseDesc:
        'Every mandate inquiry is encrypted and reviewed solely by Senior Sector Partners—never circulated to unvetted brokers—upholding strict investment banking discretion.',
      form: {
        mandateType: 'Mandate Engagement Category',
        mandateOptions: [
          'Sell-Side Divestiture / Deploy M&A Asset Product',
          'Buy-Side Acquisition / Off-Market Target Search',
          'Joint Venture Structuring / Strategic Growth Capital',
          'Cross-Border Co-Advisory Institutional Partnership',
        ],
        name: 'Principal / Executive Name *',
        company: 'Institution / Company Name *',
        position: 'Title (Chairman / CEO / Managing Partner / CIO)',
        email: 'Corporate Email Address *',
        phone: 'Direct Phone / WhatsApp / WeChat *',
        estimatedValue: 'Indicative Transaction Size (USD)',
        message: 'Confidential Mandate Brief or Investment Criteria *',
        submit: 'Transmit Confidential Mandate Brief',
        submittedTitle: 'Confidential Mandate Transmitted to Managing Partners',
        submittedDesc:
          'Thank you for engaging DaiChungCapital. Our relevant Sector Managing Director will reach out via secure channel within 4–12 business hours.',
      },
    },
    footer: {
      description:
        'DaiChungCapital is an institutional M&A advisory firm, strategic capital architect, and trilingual cross-border transaction platform serving Vietnam and Asia-Pacific.',
      colPlatform: 'Core Sectors',
      colSolutions: 'Investment Banking',
      colCompliance: 'Governance & Standards',
      complianceItems: [
        'Mutual Bilateral NDA Protection Protocol',
        'Strict AML / KYC & Proof-of-Funds Verification',
        'IFRS Financial Reconciliation & RICS Valuation',
        'Native Trilingual Execution: EN · VI · 中文',
      ],
      disclaimer:
        'INSTITUTIONAL DISCLAIMER: All transaction mandates displayed on this platform are presented strictly as anonymized Blind Teasers for qualified Institutional Investors, Accredited Buyers, and Corporate Principals. Nothing herein constitutes a public offer of securities.',
      copyright: '© 2026 DaiChungCapital. All Rights Reserved. Institutional M&A Advisory.',
    },
  },

  zh: {
    brandSub: '大众资本 · 机构级跨境并购与战略投行平台',
    nav: {
      pipeline: '并购项目库',
      advisory: '投行并购服务',
      process: '五步标准流程',
      ecosystem: '资本生态圈',
      tombstones: '历史交割业绩',
      contact: '专属委托通道',
      deployProduct: '发布并购产品',
      investorPortal: '虚拟数据室 (VDR)',
    },
    hero: {
      badge: '亚太区机构级跨境并购（M&A）与大宗资产交易平台',
      titleLine1: '赋能跨境资本布局',
      titleHighlight: '定义高端并购交易',
      titleLine2: '与战略资产新标准',
      subtitle:
        'DaiChungCapital（大众资本）深度链接越南及东南亚核心地产开发商、行业龙头企业与大中华区、新加坡、日韩私募股权基金（PE）、产业集团及家族办公室，遵循“匿名项目书（Teaser）— 保密协议（NDA）— 虚拟数据室（VDR）— 投资意向书（LOI）”国际投行闭环标准。',
      ctaExplore: '浏览精选并购项目库',
      ctaSubmitMandate: '委托出售资产 / 提交买方需求',
      securityNote: '100%国际标准双向NDA保密机制 · 土地权属与四大审计底稿前置核验',
      stats: {
        volumeLabel: '在管并购项目总规模',
        volumeValue: '$24.8亿+',
        mandatesLabel: '独家在售并购标的',
        mandatesValue: '26个精选项目',
        investorsLabel: '认证PE基金及上市公司买方',
        investorsValue: '340+ 机构伙伴',
        closingLabel: '法务与VDR前置尽调合规率',
        closingValue: '100% 严选核验',
      },
    },
    pipeline: {
      eyebrow: 'CURATED M&A DEAL PIPELINE',
      title: '严选并购产品与大宗资产标的库',
      subtitle:
        'DaiChungCapital上线的每一项地产与实业并购标的均已完成前置权属清查、独立SPV架构梳理及财务初审，并严格采用国际投行匿名项目书（Blind Teaser）机制保护交易机密。',
      searchPlaceholder: '搜索项目编号、行业赛道、城市或关键词（如：守添CBD、工业园、绿电、洁净室）...',
      deployBtn: '+ 发布新并购产品标的',
      resetBtn: '重置筛选条件',
      resultsCount: (n) => `当前展示 ${n} 个已通过前置法务核验的机构级并购标的`,
      sectors: {
        all: '全部核心赛道',
        real_estate: '核心城市综合体与住宅',
        industrial: '工业园区与港口物流',
        manufacturing: '精密制造与出海供应链',
        hospitality: '五星级酒店与滨海文旅',
        healthcare: '高端私立医院与医疗',
        energy: '光伏风电与绿色基建',
      },
      structures: {
        all: '全部交易架构',
        equity_acquisition: '控股权并购（Buyout）',
        asset_transfer: '项目/大宗资产整体转让',
        jv_strategic: '跨境合资联合开发（JV）',
        growth_capital: '战略领投增资（Growth PE）',
      },
      stages: {
        all: '全部交易阶段',
        open_nda: '开放签署NDA阶段',
        in_vdr: 'VDR深度尽调阶段',
        accepting_loi: '接收意向书（LOI）阶段',
        closing: '排他谈判及交割阶段',
      },
      labels: {
        structureFilter: '交易结构类型',
        stageFilter: '当前交易进度',
        ticketSize: '交易资金规模',
        equityOffered: '拟出让权益比例',
        targetIRR: '预期内部收益率 (IRR)',
        scaleOrEbitda: '资产体量 / EBITDA',
        multiple: '估值倍数指标',
        verifiedBadge: '权属已前置核验',
        ndaBadge: '需签NDA解锁',
        featuredBadge: '旗舰重点标的',
        viewTeaserBtn: '查阅匿名概要 & VDR目录',
        requestVdrBtn: '签署NDA / 提交LOI',
        emptyTitle: '暂无符合当前筛选条件的并购标的',
        emptyDesc: '请放宽上方筛选维度，或直接向大众资本投资委员会提交专属《买方定向寻源委托书》（Buy-Side Mandate）。',
      },
    },
    advisory: {
      eyebrow: 'BESPOKE INVESTMENT BANKING CAPABILITIES',
      title: '全周期并购产品封装与跨境投行解决方案',
      subtitle:
        '融合华尔街投行交易执行标准与越南本土政商法规、土地规划审批及跨境外汇架构实操经验，打通中企及国际资本出海最后一公里。',
      cards: [
        {
          code: '01 · SELL-SIDE M&A',
          title: '卖方独家财务顾问与并购产品标准化封装',
          desc: '协助优质资产方与企业创始人完成交易前重组、净地/干净SPV剥离、编制多语种投资备忘录（CIM）并组织高溢价定向竞标。',
          bullets: [
            '独立SPV架构重组及卖方前置法律/税务排雷（Vendor DD）',
            '撰写国际标准Blind Teaser、CIM及多情景DCF财务模型',
            '主导SPA核心条款谈判、国际银行托管（Escrow）及业绩对赌设计',
          ],
        },
        {
          code: '02 · BUY-SIDE ORIGINATION',
          title: '买方独家寻源（Off-Market）与跨境控股收购',
          desc: '代表大中华区上市公司、产业链龙头及私募基金定向挖掘越南未公开市场的稀缺工业土地、成熟工厂及牌照型资产。',
          bullets: [
            '按投资回报率（IRR）、产能指标及ESG要求精准匹配标的',
            '实地踏勘、1/500规划核查、海关账册及盈利质量（QoE）穿透尽调',
            '外资准入比例（FOL）合规设计、新加坡/香港离岸架构与税务筹划',
          ],
        },
        {
          code: '03 · CAPITAL & JV STRUCTURING',
          title: '跨境合资组建（JV）、结构化融资与债务重组',
          desc: '通过优先股、可转债、夹层融资（Mezzanine）或联合开发平台灵活解决大型地产及基建项目的资金错配与流动性需求。',
          bullets: [
            '对接国际银团绿色信贷及存量高息项目贷款置换方案',
            '起草严密的合资股东协议（SHA），保障董事会席位与一票否决权',
            '联合RICS皇家特许测量师及四大会计师事务所出具权威估值',
          ],
        },
        {
          code: '04 · DIGITAL VDR & GOVERNANCE',
          title: '加密虚拟数据室（VDR）与投后百日整合（PMI）',
          desc: '全线上分级权限虚拟数据室配合动态防泄密水印，将跨境尽调周期缩短40%，并在交割后提供本土化运营平稳过渡支持。',
          bullets: [
            '基于NDA层级的精细化文档权限管控与全流程审阅留痕',
            '无缝协同中、越、新三地顶级律所与四大审计团队同步作业',
            '交割后100天投后整合（PMI）、高管留任激励与合规证照变更',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'STANDARDIZED INSTITUTIONAL WORKFLOW',
      title: '机构级五步标准化并购交割流程',
      subtitle:
        '严谨遵循国际投资银行保密与风控准则，有效杜绝市场二手居间乱象，确保买卖双方高效、安全达成交易闭环。',
      steps: [
        {
          step: '第一阶段',
          tag: 'SOURCING & PACKAGING',
          title: '标的严选核验与产品化封装',
          desc: '全面核查红皮书土地证、投资登记证（IRC）、1/500规划批文及历史现金流，构建清晰SPV交易结构并发布匿名项目概要。',
          deliverable: '核心产出：《Blind Teaser匿名概要》+ 一级权属核验单',
        },
        {
          step: '第二阶段',
          tag: 'NDA & STRATEGIC MATCHING',
          title: '定向买方精准触达与双向NDA签署',
          desc: '依托340+认证机构买方库进行保密推介；在披露项目实名与具体坐标前，严格完成具有法律约束力的双向保密协议签署。',
          deliverable: '核心产出：已签署《双向NDA》+ 完整版《CIM投资备忘录》',
        },
        {
          step: '第三阶段',
          tag: 'VIRTUAL DATA ROOM & DD',
          title: '开放加密虚拟数据室（VDR）与全面尽调',
          desc: '向买方法务、财务（QoE）、税务及工程顾问开放VDR专属账号，组织高管访谈、管理层答疑及项目现场实地考察。',
          deliverable: '核心产出：《买方尽职调查报告》+ 管理层答疑纪要',
        },
        {
          step: '第四阶段',
          tag: 'LOI & SPA STRUCTURING',
          title: '投资意向书（LOI）锁定与正式协议签署',
          desc: '协助评估非约束性报价（NBO/LOI），授予排他尽调期，敲定跨境架构、价格调整机制并正式签署股权收购协议（SPA/SHA）。',
          deliverable: '核心产出：《排他性LOI》+ 正式签署《SPA / SHA协议》',
        },
        {
          step: '第五阶段',
          tag: 'ESCROW CLOSING & PMI',
          title: '国际托管账户交割（Escrow）与投后整合',
          desc: '落实全部交割先决条件（CPs），完成外资并购审批登记，通过国际知名银行托管账户安全划转交割款并移交公司控制权。',
          deliverable: '核心产出：资金股权安全交割 +《百日投后整合方案》',
        },
      ],
    },
    ecosystem: {
      eyebrow: 'THREE-PILLAR CAPITAL ECOSYSTEM',
      title: '三大认证主体协同的私密资本生态',
      subtitle:
        '告别低效失真的传统中介传单模式，DaiChungCapital实行严格的实名机构准入制，保障每一笔并购交易的真实性与专属性。',
      roles: [
        {
          id: 'buy_side',
          badge: 'BUY-SIDE · 认证机构买方',
          title: '私募股权基金、中资出海龙头与家族办公室',
          subtitle: '直连越南一手优质稀缺资产与成熟产能标的，零信息折损。',
          benefits: [
            '优先获取未公开市场（Off-Market）一手独家标的推送',
            '配备全套中/英/越三语专业CIM报告、Excel动态财务模型及合规底稿',
            '一站式解决越南外资并购审批、ODI备案协同及新/港SPV控股架构落地',
          ],
          cta: '申请成为认证机构买方会员',
        },
        {
          id: 'sell_side',
          badge: 'SELL-SIDE · 优质资产与实业股东',
          title: '地产项目开发商与细分行业领军企业主',
          subtitle: '在高度保密前提下对接全球实力买家，最大化资产估值溢价。',
          benefits: [
            '全程匿名推介保护企业声誉、核心团队稳定及现有客户关系',
            '投行团队深度梳理历史法务财税瑕疵，重塑高成长估值逻辑',
            '仅安排具备明确资金实力证明（Proof of Funds）的决策层直接对话',
          ],
          cta: '委托大众资本部署并购产品',
        },
        {
          id: 'advisor_partner',
          badge: 'MANDATED PARTNER · 战略同盟机构',
          title: '精品投行、跨境律所、会计师事务所与买方代表',
          subtitle: '遵循国际投行联合顾问（Co-Advisory）规则，严谨保护客户归属权。',
          benefits: [
            '签署具备法律效力的项目/买方报备保护协议，杜绝跳单风险',
            '共享DaiChungCapital加密虚拟数据室（VDR）与本地双语执行团队支持',
            '透明公正的国际投行标准成功费（Success Fee）分成机制',
          ],
          cta: '加入亚太跨境并购顾问联盟',
        },
      ],
    },
    tombstones: {
      eyebrow: 'PROVEN CROSS-BORDER EXECUTION',
      title: '代表性跨境交割墓碑（Tombstones）与资本走廊',
      subtitle:
        '深耕亚洲最具活力的跨境并购资本通道：越南 ⇄ 大中华区（中国内地、香港、台湾）· 新加坡 · 日本 · 韩国。',
      corridorsTitle: '原生“中 · 英 · 越”三语投行执行壁垒',
      corridorsDesc:
        'DaiChungCapital核心合伙人团队精通中文、英文、越南文三语金融法务谈判，深刻理解中国出海企业投资逻辑、欧美基金风控标准及越南本地审批实务，大幅提升跨境交易交割率。',
    },
    modal: {
      confidentialHeader: '保密并购项目档案 · BLIND TEASER',
      tabs: {
        overview: '01. 投资亮点与法务核验',
        vdr: '02. 虚拟数据室（VDR）目录',
        ndaLoi: '03. 在线签NDA / 提交LOI',
      },
      execSummary: '项目核心投资逻辑（Executive Summary）',
      investmentHighlights: '核心交易亮点与价值重塑空间',
      legalReadiness: '已前置核验的法律权属与审计清单',
      idealBuyer: '拟匹配买方机构画像',
      vdrTitle: '加密虚拟数据室（Virtual Data Room）底稿清单',
      vdrLockedNote:
        '底层权属证照与审计报告均受动态防泄密水印保护。请切换至右侧标签完成电子NDA申请，经合规审核后即可获取VDR账号及完整版《CIM投资备忘录》。',
      unlockBtn: '前往提交电子NDA申请并解锁VDR',
      ndaFormTitle: '电子保密协议（NDA）签署及VDR权限申请',
      ndaFormSubtitle:
        '您的机构信息将严格保密并直达负责该项目的执行董事（Managing Director）。经核验的机构投资人将在4个工作小时内收到VDR访问凭证。',
      fields: {
        fullName: '授权代表姓名 *',
        organization: '所属基金 / 上市公司 / 投资主体全称 *',
        roleType: '参与交易身份',
        roleOptions: [
          '私募股权基金 / 机构投资人（买方直投）',
          '产业集团 / 上市公司（战略收购方）',
          '单一/联合家族办公室（Family Office）',
          '获买方正式书面授权的独家财务顾问',
        ],
        email: '企业官方邮箱（Corporate Email） *',
        phone: '联系电话 / 微信（WeChat） / WhatsApp *',
        capitalCapacity: '拟单笔股权出资规模（美元 USD）',
        intentType: '当前申请事项',
        intentOptions: [
          '签署双向NDA并获取完整版《CIM保密备忘录》',
          '申请开通加密虚拟数据室（VDR）查阅权限',
          '预约与项目负责董事进行闭门电话会议（Private Call）',
          '沟通提交非约束性投资意向书（Indicative LOI / NBO）',
        ],
        agreeNda:
          '本人确认对所获悉的项目信息承担严格保密义务，并保证已获所属机构合法授权提交本申请。',
        submitNda: '提交NDA申请并获取项目档案',
        successTitle: 'NDA申请已登记并生成专属VDR追踪编码',
        successDesc:
          'DaiChungCapital交易执行部已受理贵机构的保密申请。在合规团队为您激活完整VDR权限期间，您可立即下载下方《匿名项目概要简报》。',
        downloadTeaserBtn: '立即下载《项目匿名概要简报》(.TXT)',
      },
    },
    deployModal: {
      badge: '组合管理后台 · DEPLOY NEW M&A MANDATE',
      title: '发布 / 部署新并购产品标的',
      subtitle:
        '供DaiChungCapital投行团队或合作资产方快速创建标准化Blind Teaser并购产品，提交后将实时同步至线上精选并购项目库。',
      codenameLabel: '保密项目代号（例如：PROJECT GOLDEN BAY）',
      projectTitleLabel: '并购产品标题名称',
      sectorLabel: '所属行业赛道',
      structureLabel: '拟采用交易结构',
      locationLabel: '标的所在城市/工业区',
      ticketLabel: '交易资金规模（例如：$45.0M – $55.0M）',
      equityLabel: '拟出让股权/资产比例（例如：51% – 100%）',
      irrLabel: '预期内部收益率 IRR（例如：18.5% – 22.0%）',
      scaleLabel: '资产规模或EBITDA指标（例如：12公顷 · EBITDA $6.4M）',
      summaryLabel: '项目核心投资亮点与法务现状摘要',
      highlight1Label: '首要核心竞争优势/亮点描述',
      submitBtn: '立即发布至线上并购库',
      cancelBtn: '取消',
      publishedToast: '新并购产品标的已成功部署上线！',
    },
    contact: {
      eyebrow: 'PRIVATE MANDATE DESK',
      title: '与 DaiChungCapital 开启私密并购委托对话',
      subtitle:
        '无论您是计划部署优质资产出售、引入战略股东，还是代表中资及国际资本赴越寻源收购，欢迎直接接洽我们的行业主管合伙人。',
      desksTitle: '区域交易执行中心与代表处',
      desks: [
        {
          city: '胡志明市 · 越南总部',
          address: '胡志明市第一郡 / 守添国际金融中心核心区 28层',
          deskType: '越南南部大宗地产与企业并购执行中心',
        },
        {
          city: '河内 · 北部业务中心',
          address: '河内市还剑郡李常杰大道金融大厦',
          deskType: '北部电子制造走廊、工业园与政企事务中心',
        },
        {
          city: '新加坡及大中华区跨境桌面',
          address: '新加坡滨海湾金融中心 · 联动香港、上海、深圳及台北团队',
          deskType: '跨境资金架构、ODI协同与离岸SPV交割中心',
        },
      ],
      confidentialPromiseTitle: '国际投行“防火墙（Chinese Wall）”保密承诺',
      confidentialPromiseDesc:
        '所有委托需求均加密直达对应赛道主管合伙人，绝不外泄予非授权居间方，全流程捍卫商业机密与交易确定性。',
      form: {
        mandateType: '拟委托业务类型',
        mandateOptions: [
          '卖方独家委托：出售地产项目 / 企业控股权转让',
          '买方定向寻源：委托搜寻越南工业地 / 工厂 / 牌照资产',
          '跨境合资与融资：联合开发（JV）或战略私募增资',
          '机构同盟合作：跨境律所 / 投行 / 产业园区渠道合作',
        ],
        name: '决策人 / 负责人姓名 *',
        company: '公司 / 基金 / 机构全称 *',
        position: '职务（董事长 / 总裁 / 投资总监 / 合伙人）',
        email: '官方工作邮箱 *',
        phone: '直通电话 / 微信（WeChat） / WhatsApp *',
        estimatedValue: '预计交易资金规模（USD）',
        message: '请简述拟部署的并购产品概况或买方投资标准 *',
        submit: '加密提交专属委托简报',
        submittedTitle: '专属委托简报已加密送达主管合伙人案头',
        submittedDesc:
          '感谢信任 DaiChungCapital（大众资本）。对应行业的华语/双语执行董事将在 4–12 个工作小时内通过加密渠道与您直接取得联系。',
      },
    },
    footer: {
      description:
        'DaiChungCapital（大众资本）是一家专注于越南及东南亚市场的机构级并购财务顾问（M&A Advisory）、战略资本架构师及“中·英·越”三语数字化大宗资产交易平台。',
      colPlatform: '重点并购赛道',
      colSolutions: '核心投行服务',
      colCompliance: '风控与合规准则',
      complianceItems: [
        '国际标准双向保密协议（NDA）保护机制',
        '严格的买方资信核验（AML / KYC / 资金证明）',
        'IFRS国际审计准则转换与RICS独立资产评估',
        '原生三语无缝谈判支持：中文 · EN · VI',
      ],
      disclaimer:
        '机构免责声明：本平台所展示之全部并购项目均以匿名概要（Blind Teaser）形式呈现，仅供合格机构投资者（QII）、上市公司及具备相应风险识别能力的产业资本参考，不构成任何形式的公开证券发行或要约邀请。',
      copyright: '© 2026 DaiChungCapital（大众资本）版权所有 · 机构级跨境并购与战略资本顾问。',
    },
  },
};
