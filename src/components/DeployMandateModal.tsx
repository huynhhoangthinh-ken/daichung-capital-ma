import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';
import { DealStructureKey, Language, MAMandate, SectorKey } from '../types/ma';
import { UIStrings } from '../i18n/translations';

interface DeployMandateModalProps {
  open: boolean;
  lang: Language;
  t: UIStrings;
  onClose: () => void;
  onDeploy: (newDeal: MAMandate) => void;
}

export const DeployMandateModal: React.FC<DeployMandateModalProps> = ({
  open,
  t,
  onClose,
  onDeploy,
}) => {
  const [codename, setCodename] = useState('PROJECT IMPERIAL BAY');
  const [title, setTitle] = useState('');
  const [sector, setSector] = useState<Exclude<SectorKey, 'all'>>('real_estate');
  const [structure, setStructure] =
    useState<Exclude<DealStructureKey, 'all'>>('equity_acquisition');
  const [location, setLocation] = useState('');
  const [ticket, setTicket] = useState('$40.0M – $55.0M');
  const [equity, setEquity] = useState('65% – 100%');
  const [irr, setIrr] = useState('18.5% – 22.0%');
  const [scale, setScale] = useState('4.2 ha · EBITDA $6.5M');
  const [summary, setSummary] = useState('');
  const [highlight, setHighlight] = useState('');

  if (!open) return null;

  const themeBySector: Record<Exclude<SectorKey, 'all'>, MAMandate['visualTheme']> = {
    real_estate: 'riverfront_tower',
    industrial: 'industrial_port',
    manufacturing: 'precision_tech',
    hospitality: 'coastal_resort',
    healthcare: 'medical_hub',
    energy: 'clean_energy',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomSuffix = Math.floor(10 + Math.random() * 89);
    const newMandate: MAMandate = {
      id: `dcc-custom-${Date.now()}`,
      code: `DCC-NEW-2026-${randomSuffix}`,
      codename: {
        vi: codename.toUpperCase(),
        en: codename.toUpperCase(),
        zh: codename.toUpperCase(),
      },
      title: {
        vi: title,
        en: title,
        zh: title,
      },
      sector,
      structure,
      stage: 'open_nda',
      location: {
        vi: location,
        en: location,
        zh: location,
      },
      ticketSizeUSD: ticket,
      equityOffered: equity,
      targetIRR: irr,
      ebitdaOrScale: {
        vi: scale,
        en: scale,
        zh: scale,
      },
      valuationMultiple: 'Negotiable / DCF',
      verifiedLegal: true,
      featured: true,
      visualTheme: themeBySector[sector],
      summary: {
        vi: summary,
        en: summary,
        zh: summary,
      },
      highlights: {
        vi: [
          highlight || 'Cấu trúc pháp lý SPV sạch, sẵn sàng mở Phòng dữ liệu ảo VDR ngay sau NDA',
          'Định giá hấp dẫn so với các giao dịch tương đương trong khu vực',
        ],
        en: [
          highlight || 'Clean SPV legal structure, VDR ready immediately upon mutual NDA execution',
          'Attractive entry valuation relative to regional precedent M&A transactions',
        ],
        zh: [
          highlight || '独立SPV法律架构清晰，签署双向NDA后即可开放加密虚拟数据室（VDR）',
          '整体交易估值较同区域可比并购案例具备显著安全边际',
        ],
      },
      legalChecklist: {
        vi: [
          'Hồ sơ pháp lý doanh nghiệp & tài sản đã qua rà soát sơ bộ bởi DaiChungCapital',
          'Sẵn sàng ký kết Thỏa thuận Bảo mật (NDA) & cung cấp Bản chào CIM',
        ],
        en: [
          'Corporate & underlying asset titles pre-screened by DaiChungCapital Deal Desk',
          'Ready for Mutual NDA execution & full CIM release',
        ],
        zh: [
          '底层资产权属及公司架构已通过DaiChungCapital投行团队初审',
          '支持立即签署双向保密协议（NDA）并获取完整CIM备忘录',
        ],
      },
      vdrDocuments: {
        vi: [
          '01. Bản chào Thông tin Bảo mật (CIM)',
          '02. Mô hình Tài chính & Định giá Dự kiến',
          '03. Bộ Hồ sơ Pháp lý & Kiểm toán',
        ],
        en: [
          '01. Confidential Information Memorandum (CIM)',
          '02. Financial Projections & Valuation Model',
          '03. Legal & Audited Financial Dossier',
        ],
        zh: [
          '01. 保密信息备忘录（CIM）',
          '02. 财务预测及估值测算模型',
          '03. 法律权属与财务审计底稿汇编',
        ],
      },
      idealBuyerProfile: {
        vi: 'Quỹ Đầu tư Private Equity, Nhà Đầu tư Chiến lược trong và ngoài nước.',
        en: 'Private Equity Funds, Regional & Global Strategic Acquirers.',
        zh: '私募股权基金（PE）、跨国产业集团及实力机构买方。',
      },
    };

    onDeploy(newMandate);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md p-4 overflow-y-auto"
      style={{ backgroundColor: 'var(--bg-backdrop)' }}
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-2xl rounded-2xl border p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto"
        style={{
          backgroundColor: 'var(--bg-modal)',
          borderColor: 'var(--gold-border-strong)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b dcc-divider pb-4">
          <div>
            <span className="text-[10.5px] font-mono-finance uppercase tracking-wider dcc-text-gold font-semibold">
              {t.deployModal.badge}
            </span>
            <h3 className="mt-1 font-serif-luxury text-2xl font-semibold dcc-text-primary">
              {t.deployModal.title}
            </h3>
            <p className="mt-1 text-xs dcc-text-muted">{t.deployModal.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg dcc-inset p-2 dcc-text-muted hover:opacity-80"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs dcc-text-secondary mb-1">
                {t.deployModal.codenameLabel}
              </label>
              <input
                required
                type="text"
                value={codename}
                onChange={(e) => setCodename(e.target.value)}
                className="w-full rounded-lg dcc-input px-3.5 py-2.5"
              />
            </div>

            <div>
              <label className="block text-xs dcc-text-secondary mb-1">
                {t.deployModal.locationLabel}
              </label>
              <input
                required
                type="text"
                placeholder="TP. Hồ Chí Minh / Hà Nội / Bình Dương..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg dcc-input px-3.5 py-2.5"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs dcc-text-secondary mb-1">
              {t.deployModal.projectTitleLabel}
            </label>
            <input
              required
              type="text"
              placeholder="VD: Tổ hợp Khu Công nghiệp Công nghệ cao / Chuỗi Phòng khám..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg dcc-input px-3.5 py-2.5"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs dcc-text-secondary mb-1">
                {t.deployModal.sectorLabel}
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value as Exclude<SectorKey, 'all'>)}
                className="w-full rounded-lg dcc-input px-3.5 py-2.5"
              >
                <option value="real_estate">{t.pipeline.sectors.real_estate}</option>
                <option value="industrial">{t.pipeline.sectors.industrial}</option>
                <option value="manufacturing">{t.pipeline.sectors.manufacturing}</option>
                <option value="hospitality">{t.pipeline.sectors.hospitality}</option>
                <option value="healthcare">{t.pipeline.sectors.healthcare}</option>
                <option value="energy">{t.pipeline.sectors.energy}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs dcc-text-secondary mb-1">
                {t.deployModal.structureLabel}
              </label>
              <select
                value={structure}
                onChange={(e) =>
                  setStructure(e.target.value as Exclude<DealStructureKey, 'all'>)
                }
                className="w-full rounded-lg dcc-input px-3.5 py-2.5"
              >
                <option value="equity_acquisition">
                  {t.pipeline.structures.equity_acquisition}
                </option>
                <option value="asset_transfer">{t.pipeline.structures.asset_transfer}</option>
                <option value="jv_strategic">{t.pipeline.structures.jv_strategic}</option>
                <option value="growth_capital">{t.pipeline.structures.growth_capital}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-[11px] dcc-text-muted mb-1">
                {t.deployModal.ticketLabel}
              </label>
              <input
                required
                type="text"
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
                className="w-full rounded-lg dcc-input px-3 py-2 text-xs font-mono-finance"
              />
            </div>
            <div>
              <label className="block text-[11px] dcc-text-muted mb-1">
                {t.deployModal.equityLabel}
              </label>
              <input
                required
                type="text"
                value={equity}
                onChange={(e) => setEquity(e.target.value)}
                className="w-full rounded-lg dcc-input px-3 py-2 text-xs font-mono-finance"
              />
            </div>
            <div>
              <label className="block text-[11px] dcc-text-muted mb-1">
                {t.deployModal.irrLabel}
              </label>
              <input
                required
                type="text"
                value={irr}
                onChange={(e) => setIrr(e.target.value)}
                className="w-full rounded-lg dcc-input px-3 py-2 text-xs font-mono-finance"
              />
            </div>
            <div>
              <label className="block text-[11px] dcc-text-muted mb-1">
                {t.deployModal.scaleLabel}
              </label>
              <input
                required
                type="text"
                value={scale}
                onChange={(e) => setScale(e.target.value)}
                className="w-full rounded-lg dcc-input px-3 py-2 text-xs font-mono-finance"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs dcc-text-secondary mb-1">
              {t.deployModal.summaryLabel}
            </label>
            <textarea
              required
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full rounded-lg dcc-input px-3.5 py-2.5"
            />
          </div>

          <div>
            <label className="block text-xs dcc-text-secondary mb-1">
              {t.deployModal.highlight1Label}
            </label>
            <input
              type="text"
              value={highlight}
              onChange={(e) => setHighlight(e.target.value)}
              className="w-full rounded-lg dcc-input px-3.5 py-2.5"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t dcc-divider">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg dcc-inset px-5 py-2.5 text-xs font-medium dcc-text-secondary"
            >
              {t.deployModal.cancelBtn}
            </button>
            <button
              type="submit"
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-gold-gradient px-6 py-2.5 text-xs font-semibold"
            >
              <PlusCircle className="h-4 w-4" />
              <span>{t.deployModal.submitBtn}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
