import { Category, MenuItem } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'အားလုံး', labelEn: '(All)' },
  { id: 'specials', label: 'အထူးဟင်းပွဲများ', labelEn: '(Specials)' },
  { id: 'breakfast', label: 'မုန့်ဟင်းခါး', labelEn: '(Breakfast)' },
  { id: 'salads', label: 'အသုပ်စုံ', labelEn: '(Salads)' },
  { id: 'main', label: 'ထမင်းဟင်း', labelEn: '(Main Course)' },
  { id: 'drinks', label: 'အချိုရည်', labelEn: '(Drinks)' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'မုန့်ဟင်းခါး (Mohinga)',
    description: 'Burmese fish soup with rice noodles.',
    price: 2500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5J9Kcj8Kh_62TCXEP2USdJPb9E9m5sY6pNBTOUOqPi7K1b73xcoUoJ3GgSQg5BwCJLY5IwHapUMlpDOJu-V2ATOj4TxRjgH_xKOnKzIaO6OwUmF8vqFrA8teW3ImLra-P02sfuDVzc85Mzw2lVm2i3jOjMHyBRW0x4BS2KPSCyIVbhAjo291p2Bw-MNFy6BzmtUDWRQXqQFb8cfuwnJ13HeczMBTosa3Bec1Ta1j5mHmm-DR35ySUB_GnJkxuXVBmmFlBpQsa5wdZ',
    category: 'breakfast',
    isPopular: true,
  },
  {
    id: 2,
    name: 'ရှမ်းခေါက်ဆွဲ (Shan Noodles)',
    description: 'Sticky rice noodles with chicken or pork.',
    price: 3000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsqHQ65hpyhXqIw9Ha0upVfRR9NqW-kqiMIlKGUefnffwzuzA6g3654MUc9PDfnRJ26HYDRuAZE1tduDgrW059H7M1mHVt3SIXzdbiV0LM_ou_NwifSP3ArXuc0WMyFRyQXJLPBSD4RovJVu_TO73XD3HXSbS0oDVm9B93pK9gHol1SqHXxvuS6jlLpVHdfDpMxbZY2XhaE_IUa5mH7tWweY4ZaUMcDMoqWi8VgpCtKv4FxB18GdQhEC_-R5uOupXywM8dyL6ZEOzO',
    category: 'specials',
    isSpicy: true,
  },
  {
    id: 3,
    name: 'လက်ဖက်သုပ် (Tea Leaf Salad)',
    description: 'Fermented tea leaves with nuts and beans.',
    price: 1500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcxQa0kfL_rUV6y2TmeEFPhgp3aFAoM2Q2wmrvIUmtkQsD_HIwr9MjZRMXaiZP72cTQc5WK1sr98enH080KP3gsaGn_xHX5jcyJed_4C0e3dUD-sOwJp7u-bLLzadxWl-71Fb3rDv6FOtlFjGHpmE6-kEnJSfeqsHZRbo7lKGxBBLFsb7asVTtNllCPEaC2kuRAJdKdrEGgowaTMcnE4TBc65bD6IUjJpf-aPLXnL3N7EABN20xJotSBleR_GX1u0KmxvgsS1qC_Rm',
    category: 'salads',
  },
  {
    id: 4,
    name: 'အုန်းနို့ခေါက်ဆွဲ (Coconut)',
    description: 'Wheat noodles in coconut milk curry.',
    price: 2800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhCtB2Y_Iy4hGGXAlaElk4I1PyfoM1pPly2n4DYo1eEU86EbA0BYzVdTQJvGfO9TMn6etO8yNtbI4g7MxEso6Ac-d442cIzh3Is6w-fJuR5bZzbqi8bdKTWe-iNlWXZ3iP1RXwM9uqWJP4ugaeQayF_LG6sEJrvLiXzWXQzjQ3pe4eQ--Kt0nXHLhwz0qHiX11l4vde8cxL-VkmKFAAzWiQOjXlswhxqcXmMS3RTYyOJSnlEqXdnK8vheoq2JMzAyEDW1zmHNbE1rB',
    category: 'breakfast',
  },
  {
    id: 5,
    name: 'ဒံပေါက် (Danbauk)',
    description: 'Burmese style Biryani with chicken.',
    price: 4500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlbhTE9jfNBZj6cI6bFQLQ0I8bAGWQloRjzUbRcFCwvVJ5QvqOrT78BzWY8q48CvEeiWYPPLewBhHuuvVD5hCMBp5qf3LaUDySuzK59L-SHKWtFDpmavRBUEMgaZcDdYgMZg_8uCLNd9ye7_pkWU_BJM_PzdLwGRQ6dv6vfXWZZZ3RLO60kIbJoeU7wwlbFaLreHLWhOjCGsKGdm9KlgklPi_s32cF-aAQ_c-sAclLZbWmyQX7p1Zh1fy-VkeRxLcc27b44vSBoCaA',
    category: 'main',
  },
  {
    id: 6,
    name: 'ထမင်းဟင်း (Burmese Curry)',
    description: 'Traditional rice and curry set.',
    price: 5000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxFcYozc5pYZ7Zyj9rHRnIRY7y9HWaFWCw4LaBzpnm84A7aellvwLCt54ieeQhjbTdW_9VYcULydapT9PsEza4zfydg4TdWH_ApZEhyikE64QaAK6fUEW7H7iw2vWBnPNAMFc_YPlMg7stEL_F4uubfvWLvqHBTxMYm5-dvOX2HQV1_ZfEo-89sYaAeXGFXQly5AmJJ2dCe-lzoMqBeZu271QfIBfCh0wHJEBcray8afemFWZDrsYzZM32ot6iC76bYeswm935NCIi',
    category: 'main',
  },
  {
    id: 7,
    name: 'အသုပ်စုံ (Mixed Salad)',
    description: 'Fresh mixed vegetables with dressing.',
    price: 2000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7cClTuuGhdx5aXlU_-Jm-hjZv5aF50f2JWuj-B5XjbBoOmZjUZtgPpaKprItJ5coL6k0HiRWRnZz7fhn75zXVunvFhLDsgggMZlzAMJitcJzaWjSNasyZrCiewGPd9OuuQqKyd1zAvjQSqoA4LFemZKR0FQx6O15pzvgIwXHoAXvQ7LADEbFKR5GLq87DzqZkPLhHx-ZzgYTDJXZVnekmRMTRazPWVPqtMe7_EMPXGDlfcxYsDWEc27hiVOZB_jRKStqNNEn5xt5d',
    category: 'salads',
  },
  {
    id: 8,
    name: 'တို့ဟူးသုပ် (Tofu Salad)',
    description: 'Yellow tofu salad with tamarind sauce.',
    price: 1800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJuPeHANSY7FZZHHiIHWcDI4prchW6a8csT2SMCOGNmXiGhsHxII294uwkH2Xs75IOJ4MZuDecJidJYFDKr1SKjhyRdyNuJ1vmqGNECM_6LHloE0-mP7NdN2qmDn-sYLo_C07ja8UQKL_YxIbJtrwDb-5ptRXKoKBksJQxjLJQOFVKmLxKazlPR8GUwFkG2BS-Oexjdh0LdAtEKSnVvTmRDxrxEpyiMtNhanjYwH0RT6ioD49q22ZwosU_qyug34qXWDmOi5DIJjgQ',
    category: 'salads',
  },
];