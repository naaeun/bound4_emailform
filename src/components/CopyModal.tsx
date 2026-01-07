import { useRef } from 'react';
import { DUTY_MAP, PART_MAP, TEAM_MAP } from '../constants/org';

const CopyModal = ({
  formData,
  onOpenModal,
}: {
  formData: {
    name: string;
    engName: string;
    team: string;
    part: string;
    duty: string;
    engDuty: string;
    phoneNumber: string;
    email: string;
    position: string;
    engPosition: string;
  };
  onOpenModal: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const handleCopy = async () => {
    const teamKo = TEAM_MAP[formData.team]?.label ?? '';
    const teamEn = TEAM_MAP[formData.team]?.enLabel ?? '';
    const partKo = PART_MAP[formData.part]?.label ?? '';
    const partEn = PART_MAP[formData.part]?.enLabel ?? '';
    const dutyKo = DUTY_MAP[formData.duty]?.label ?? '';
    const dutyEn = DUTY_MAP[formData.duty]?.enLabel ?? '';

    const html = `
<div style="font-family:Pretendard, Arial, sans-serif; color:#111; line-height:1.6;">
  <div style="margin-bottom:12px;">
    <span style="font-size:20px; font-weight:700;">${formData.name}</span>
    <span style="margin-left:6px; font-size:16px; color:#6B7280;">
      ${formData.engName}
    </span>
  </div>

  <div style="font-size:14px; color:#6B7280; margin-bottom:16px;">
    ${teamKo}${partKo ? ` | ${partKo}` : ''}${formData.position ? ` | ${formData.position}` : ''} ${dutyKo ? ` | ${dutyKo}` : ''}<br/>
    ${teamEn}${partEn ? ` | ${partEn}` : ''}${formData.engPosition ? ` | ${formData.engPosition}` : ''} ${dutyEn ? ` | ${dutyEn}` : ''}
  </div>

  <div style="font-size:14px; margin-bottom:16px;">
    <div>Email: <span style="text-decoration:underline; pointer-events:none; color:#111;">${formData.email.replace('@', '&#64;')}</span></div>
    <div>
      Mobile: <span style="text-decoration:underline;">02-6952-0664</span>
      &nbsp;| Phone:
      <span style="text-decoration:underline;">${formData.phoneNumber}</span>
    </div>
  </div>

  <div style="margin:20px 0;">
   <img src="/bound4Logo.jpg" alt="bound4" style='width:110px; height:32px;' />
  </div>

  <div style="font-size:14px; font-weight:600; margin-bottom:6px;">
    바운드포 주식회사
  </div>

  <div style="font-size:14px; color:#6B7280; margin-bottom:12px;">
    서울특별시 강남구 언주로 617, 3층<br/>
    3F, 617 Eonju-ro, Gangnam-gu, Seoul, Korea
  </div>

  <div style="margin-bottom:16px;">
    <a href="https://www.bound4.co.kr"
       style="color:#111; text-decoration:none;">
      www.bound4.co.kr
    </a>
  </div>

  <hr style="border:none; border-top:1px solid #E5E7EB; margin:16px 0;" />

  <div style="font-size:12px; color:#9CA3AF; margin-bottom:12px;">
    본 메일 및 첨부파일은 발신자 및 해당 수신자에게만 공개 또는 (및) 제한된 내용이며,
    영업비밀 또는 법적으로 제한되거나, 저작 권에 관련된 내용이 포함되어 있을 수 있습니다.
    만일 귀하께서 의도된 수신인이 아닌 경우, 즉시 발신인에게 의도된 수신인이 아님을
    알려주시고, 본 메일의 복사본을 포함한 원본과 첨부파일을 삭제하여 주시길 바랍니다.
    본 메일에 포함된 정보, 제안 등은 엄격의 목적에 한하여 사용되어야 하며,
    무단 공개, 복사, 배포는 금지됩니다. 이러한 상황을 위반할 경우,
    관련 법령에 따라 처벌될 수 있습니다.
  </div>

  <div style="font-size:12px; color:#9CA3AF;">
    This email, including attached files, may contain confidential information and is intended
    only for the use of the individual and/or entity to which is addressed. If you are not the
    intended recipient, please notify us by "Reply" command and immediately delete the original
    and any copies or printouts thereof. Disclosure, copying, use, or distribution of the
    information included in this email is prohibited. If you violate any conditions above,
    you may carry a penalty according to the law.
  </div>
</div>
`.trim();

    const textFallback = html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, '');

    await navigator.clipboard.write([
      new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([textFallback], { type: 'text/plain' }),
      }),
    ]);

    onOpenModal();
  };

  return (
    <div className="flex w-[600px] flex-col gap-8 border border-Color-Border-Normal bg-Color-Background-Normal p-10 radius-md">
      <div ref={contentRef}>
        <div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1 text-Color-Label-Strong text-Headline4-SemiBold">
                {formData.name}
                <p className="text-Color-Label-Neutral text-Body1-Regular">
                  {formData.engName}
                </p>
              </div>
              <div className="text-Color-Label-Alternative text-Body2-Regular">
                {TEAM_MAP[formData.team]?.label}
                {formData.part && ` | ${PART_MAP[formData.part]?.label}`}
                {formData.position && ` | ${formData.position}`}
                {formData.duty && ` | ${DUTY_MAP[formData.duty]?.label}`}
                <br />
                {TEAM_MAP[formData.team]?.enLabel}
                {formData.part && ` | ${PART_MAP[formData.part]?.enLabel}`}
                {formData.engPosition && ` | ${formData.engPosition}`}
                {formData.duty && ` | ${DUTY_MAP[formData.duty]?.enLabel}`}
              </div>
            </div>
            <div className="flex flex-col gap-1 text-Color-Label-Normal text-Body2-Regular">
              <div className="flex gap-1">
                <span>Email:</span>
                <span className="underline">{formData.email}</span>
              </div>
              <div className="flex gap-1">
                <span>Mobile:</span>
                <span className="underline">02-6952-0664</span>
                <span>| Phone:</span>
                <span className="underline">{formData.phoneNumber}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-5">
            <img src="/bound4Logo.svg" alt="" width={110} height={32} />
            <div className="flex flex-col gap-3">
              <p className="text-Color-Label-Strong text-Body1-SemiBold">
                바운드포 주식회사
              </p>
              <div className="text-Color-Label-Alternative text-Body2-Regular">
                <p>서울특별시 강남구 언주로 617, 3층</p>
                <p>3F, 617 Eonju-ro, Gangnam-gu, Seoul, Korea</p>
              </div>
              <p>www.bound4.co.kr</p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-Color-Border-Neutral" />
          <div className="flex w-full flex-col items-start gap-4 text-Color-Label-Alternative text-Body2-Regular">
            <span>
              본 메일 및 첨부파일은 발신자 및 해당 수신자에게만 공개 또는 (및)
              제한된 내용이며, 영업비밀 또는 법적으로 제한되거나, 저작 권에
              관련된 내용이 포함되어 있을 수 있습니다. 만일 귀하께서 의도된
              수신인이 아닌 경우, 즉시 발신인에게 의도된 수신인이 아님을
              알려주시고, 본 메일의 복사본을 포함한 원본과 첨부파일을 삭제하여
              주시길 바랍니다. 본 메일에 포함된 정보, 제안 등은 엄격의 목적에
              한하여 사용되어야 하며, 무단 공개, 복사, 배포는 금지됩니다. 이러한
              상황을 위반할 경우, 관련 법령에 따라 처벌될 수 있습니다.
            </span>
            <br />
            <span>
              This email, including attached files, may contain confidential
              information and is intended only for the use of the individual
              and/or entity to which is addressed. If you are not the intended
              recipient, please notify us by "Reply" command and immediately
              delete the original and any copies or printouts thereof.
              Disclosure, copying, use, or distribution of the information
              included in this email is prohibited. If you violate any
              conditions above, you may carry a penalty according to the law.
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="flex h-[42px] w-full items-center justify-center bg-gradient-to-b from-[#8CD915] to-[#01C3A9] px-6 py-3 text-Color-Label-Inverse radius-md text-Body1-SemiBold hover:opacity-90"
      >
        복사하기
      </button>
    </div>
  );
};

export default CopyModal;
