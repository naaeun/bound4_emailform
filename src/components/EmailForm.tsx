import React from 'react';
import DropdownFormGroup from './DropdownFormGroup';
import FormGroup from './FormGroup';
type EmailFormData = {
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

const formatPhoneNumber = (value: string) => {
  const numbersOnly = value.replace(/\D/g, '');

  if (numbersOnly.length <= 3) {
    return numbersOnly;
  }

  if (numbersOnly.length <= 7) {
    return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3)}`;
  }

  return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3, 7)}-${numbersOnly.slice(7, 11)}`;
};

const TEAM_OPTIONS = ['플랫폼사업팀', '데이터사업팀', '경영전략팀'];

const PART_OPTIONS_BY_TEAM: Record<string, string[]> = {
  플랫폼사업팀: ['선행기술연구 파트'],
};

const DUTY_OPTIONS = ['리더', '매니저'];

const EmailForm = ({
  formData,
  setFormData,
  onOpenModal,
}: {
  formData: EmailFormData;
  setFormData: React.Dispatch<React.SetStateAction<EmailFormData>>;
  onOpenModal: () => void;
}) => {
  return (
    <>
      <div className="flex h-full w-full flex-col justify-between border border-Color-Border-Normal bg-Color-Background-Normal px-6 py-10 radius-md">
        <div className="flex flex-col items-center gap-6">
          <img src="/bound4Logo.svg" alt="" width={165} height={48} />
          <div className="flex w-full flex-col gap-4">
            <FormGroup
              labelProps={{
                label: '이름',
                labelIcon: (
                  <p className="text-Color-Feedback-Error text-Caption1-Regular">
                    *
                  </p>
                ),
              }}
              inputProps={{
                state: 'default',
                size: 'sm',
                placeholder: '홍길동',
                value: formData.name,
                onChange: (e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                },
              }}
              helperProps={{}}
            />
            <FormGroup
              labelProps={{
                label: '영문 이름',
                labelIcon: (
                  <p className="text-Color-Feedback-Error text-Caption1-Regular">
                    *
                  </p>
                ),
              }}
              inputProps={{
                state: 'default',
                size: 'sm',
                placeholder: 'Hong Gil Dong',
                value: formData.engName,
                onChange: (e) => {
                  setFormData((prev) => ({ ...prev, engName: e.target.value }));
                },
              }}
              helperProps={{}}
            />
            <DropdownFormGroup
              size="sm"
              labelProps={{
                label: '팀',
                labelIcon: (
                  <p className="text-Color-Feedback-Error text-Caption1-Regular">
                    *
                  </p>
                ),
              }}
              placeholder="예시) 플랫폼 사업팀"
              options={TEAM_OPTIONS}
              hasValue={!!formData.team}
              inputValue={formData.team}
              onOptionSelect={(value) => {
                setFormData((prev) => ({
                  ...prev,
                  team: value,
                  part: '', // 팀 변경 시 파트 초기화
                }));
              }}
              helperProps={{}}
            />
            {formData.team === '플랫폼사업팀' && (
              <>
                <DropdownFormGroup
                  size="sm"
                  labelProps={{
                    label: '파트',
                    labelIcon: (
                      <p className="text-Color-Label-Assistive text-Caption1-Regular">
                        (선택사항)
                      </p>
                    ),
                  }}
                  placeholder="파트를 선택해주세요"
                  options={PART_OPTIONS_BY_TEAM[formData.team]}
                  hasValue={!!formData.part}
                  inputValue={formData.part}
                  onOptionSelect={(value) => {
                    setFormData((prev) => ({ ...prev, part: value }));
                  }}
                  helperProps={{}}
                />
              </>
            )}
            <FormGroup
              labelProps={{
                label: '포지션',
                labelIcon: (
                  <p className="text-Color-Feedback-Error text-Caption1-Regular">
                    *
                  </p>
                ),
              }}
              inputProps={{
                state: 'default',
                size: 'sm',
                placeholder: '예시 : UX디자이너',
                value: formData.position,
                onChange: (e) => {
                  setFormData((prev) => ({
                    ...prev,
                    position: e.target.value,
                  }));
                },
              }}
              helperProps={{}}
            />
            <FormGroup
              labelProps={{
                label: '영문 포지션',
                labelIcon: (
                  <p className="text-Color-Feedback-Error text-Caption1-Regular">
                    *
                  </p>
                ),
              }}
              inputProps={{
                state: 'default',
                size: 'sm',
                placeholder: 'UX Designer',
                value: formData.engPosition,
                onChange: (e) => {
                  setFormData((prev) => ({
                    ...prev,
                    engPosition: e.target.value,
                  }));
                },
              }}
              helperProps={{}}
            />
            <DropdownFormGroup
              size="sm"
              labelProps={{
                label: '직책',
                labelIcon: (
                  <p className="text-Color-Feedback-Error text-Caption1-Regular">
                    *
                  </p>
                ),
              }}
              placeholder="직책 선택해주세요"
              options={DUTY_OPTIONS}
              hasValue={!!formData.duty}
              inputValue={formData.duty}
              onOptionSelect={(value) => {
                setFormData((prev) => ({ ...prev, duty: value }));
              }}
              helperProps={{}}
            />
            <FormGroup
              labelProps={{
                label: '휴대폰 번호',
                labelIcon: (
                  <p className="text-Color-Feedback-Error text-Caption1-Regular">
                    *
                  </p>
                ),
              }}
              inputProps={{
                state: 'default',
                size: 'sm',
                placeholder: '010-1234-5678',
                value: formData.phoneNumber,
                onChange: (e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  setFormData((prev) => ({
                    ...prev,
                    phoneNumber: formatted,
                  }));
                },
              }}
              helperProps={{}}
            />
            <FormGroup
              labelProps={{
                label: '이메일',
                labelIcon: (
                  <p className="text-Color-Feedback-Error text-Caption1-Regular">
                    *
                  </p>
                ),
              }}
              inputProps={{
                state: 'default',
                size: 'sm',
                placeholder: 'abc@bound4.co.kr',
                value: formData.email,
                onChange: (e) => {
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                },
              }}
              helperProps={{}}
            />
          </div>
          <button
            onClick={onOpenModal}
            className="flex h-[42px] w-[343px] items-center justify-center bg-gradient-to-b from-[#8CD915] to-[#01C3A9] px-6 py-3 text-Color-Label-Inverse radius-md text-Body1-SemiBold hover:opacity-90"
          >
            생성하기
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
