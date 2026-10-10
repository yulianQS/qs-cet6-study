export type Card = {id:string;kind:'word'|'pattern';term:string;meaning:string;example:string;translation:string;tip:string;topic:string};
const groups:Record<string,string>= {
'学术研究': `substantial|adj. 大量的；重大的|The new policy has led to a substantial reduction in waste.|新政策使废弃物大幅减少。|搭配：a substantial reduction / increase
hypothesis|n. 假设|The experiment was designed to test this hypothesis.|这项实验旨在检验这个假设。|搭配：test a hypothesis；复数 hypotheses
empirical|adj. 以观察或实验为依据的|The argument is supported by empirical evidence.|这一论点有实证证据支持。|搭配：empirical evidence；联系 experiment 形成语境联想
scrutiny|n. 仔细审查|The findings came under close scrutiny.|这些研究结果受到了仔细审查。|搭配：under close scrutiny
infer|v. 推断|We cannot infer causation from correlation alone.|我们不能仅凭相关性推断因果关系。|词族：infer → inference；注意 infer ... from ...
underlying|adj. 潜在的；根本的|Researchers tried to identify the underlying cause.|研究人员试图找出根本原因。|搭配：the underlying cause / problem
conclusive|adj. 确凿的；决定性的|The available evidence is not conclusive.|现有证据并不确凿。|词族：conclude → conclusion → conclusive
assess|v. 评估|The team will assess the impact of the reform.|该团队将评估改革的影响。|词族：assess → assessment；搭配 assess the impact
authentic|adj. 真实的；真品的|Students benefit from reading authentic materials.|阅读真实语料能让学生受益。|词族：authentic → authenticity
bias|n. 偏见；偏差|A larger sample may reduce selection bias.|更大的样本可能减少选择偏差。|搭配：selection bias；形容词 biased`,
'教育成长': `acquire|v. 获得；习得|Children acquire language through interaction.|儿童通过互动习得语言。|词族：acquire → acquisition；搭配 acquire skills
retain|v. 保留；记住|Regular practice helps learners retain new vocabulary.|定期练习帮助学习者记住新词汇。|词族：retain → retention；搭配 retain information
comprehend|v. 理解|It takes time to comprehend a complex argument.|理解一个复杂论点需要时间。|词族：comprehend → comprehension
proficiency|n. 熟练；精通|The course aims to improve proficiency in English.|这门课程旨在提高英语熟练程度。|搭配：proficiency in；形容词 proficient
curriculum|n. 课程体系|Digital literacy is now part of the curriculum.|数字素养现在是课程体系的一部分。|区别：curriculum 是课程体系，course 是一门课
attain|v. 达到；获得|Students need clear goals to attain their full potential.|学生需要明确的目标来充分发挥潜力。|搭配：attain a goal；词族 attainment
cultivate|v. 培养；耕作|Reading widely can cultivate critical thinking.|广泛阅读可以培养批判性思维。|搭配：cultivate a habit / interest
competence|n. 能力；胜任|Practical tasks help build professional competence.|实践任务有助于培养专业能力。|词族：competent → competence
motivate|v. 激励|Specific feedback can motivate students to persist.|具体的反馈能激励学生坚持。|搭配：motivate somebody to do；名词 motivation
autonomous|adj. 自主的|The program encourages students to become autonomous learners.|该项目鼓励学生成为自主学习者。|词族：autonomous → autonomy`,
'环境生态': `sustainable|adj. 可持续的|Cities need sustainable transport systems.|城市需要可持续的交通体系。|词族：sustain → sustainable → sustainability
biodiversity|n. 生物多样性|Protecting wetlands helps preserve biodiversity.|保护湿地有助于维护生物多样性。|构词提示：bio- 与生命有关，diversity 表示多样性
deplete|v. 大量消耗；耗尽|Overfishing can deplete fish stocks.|过度捕捞会大量消耗鱼类资源。|词族：deplete → depletion
mitigate|v. 减轻；缓和|Trees can mitigate the effects of urban heat.|树木可以减轻城市高温的影响。|搭配：mitigate the effects / risks
conserve|v. 节约；保护|Households are encouraged to conserve water.|人们被鼓励节约家庭用水。|词族：conserve → conservation
emission|n. 排放；排放物|The city plans to reduce carbon emissions.|该市计划减少碳排放。|词族：emit → emission；排放物常用复数
renewable|adj. 可再生的|Investment in renewable energy is increasing.|对可再生能源的投资正在增加。|词族：renew → renewable；搭配 renewable energy
deteriorate|v. 恶化|Air quality may deteriorate during a heat wave.|热浪期间空气质量可能恶化。|词族：deteriorate → deterioration
contaminate|v. 污染|Industrial waste can contaminate drinking water.|工业废弃物可能污染饮用水。|词族：contaminate → contamination
resilient|adj. 有韧性的；能恢复的|Diverse ecosystems tend to be more resilient.|多样化的生态系统往往更有韧性。|词族：resilient → resilience`,
'科技创新': `innovation|n. 创新|Innovation can improve the quality of public services.|创新可以提升公共服务质量。|词族：innovate → innovation → innovative
obsolete|adj. 过时的；淘汰的|Some devices become obsolete within a few years.|有些设备在几年内就会过时。|搭配：become obsolete
sophisticated|adj. 复杂精密的；老练的|The laboratory uses sophisticated equipment.|该实验室使用精密设备。|搭配：sophisticated equipment / technology
automation|n. 自动化|Automation is changing the nature of routine work.|自动化正在改变日常重复性工作的性质。|词族：automate → automation
feasible|adj. 可行的|The proposal is technically feasible but expensive.|该提议在技术上可行，但成本高昂。|词族：feasible → feasibility
integrate|v. 整合；融入|Teachers can integrate technology into classroom activities.|教师可以将技术融入课堂活动。|搭配：integrate A into B；名词 integration
infrastructure|n. 基础设施|Reliable infrastructure supports economic development.|可靠的基础设施支撑经济发展。|搭配：digital / transport infrastructure
accessible|adj. 可获取的；易使用的|Public information should be accessible to everyone.|公共信息应当人人可获取。|搭配：accessible to；词族 access → accessibility
privacy|n. 隐私|Users should have control over their privacy.|用户应当能够掌控自己的隐私。|搭配：protect / respect privacy；形容词 private
algorithm|n. 算法|An algorithm determines which posts users see.|一种算法决定用户看到哪些帖子。|搭配：a recommendation algorithm`,
'社会公共': `inequality|n. 不平等|Access to education can help reduce inequality.|受教育的机会有助于减少不平等。|词族：equal → equality → inequality
vulnerable|adj. 易受伤害的；脆弱的|Older buildings are vulnerable to extreme weather.|较老的建筑容易受极端天气影响。|搭配：vulnerable to；名词 vulnerability
demographic|adj. 人口统计的|Demographic changes influence demand for housing.|人口结构变化影响住房需求。|搭配：demographic changes
urbanization|n. 城镇化|Rapid urbanization creates new demands on transport.|快速城镇化对交通提出了新需求。|词族：urban → urbanize → urbanization
consensus|n. 共识|The committee reached a consensus on the proposal.|委员会就该提议达成了共识。|搭配：reach a consensus on
legislation|n. 法律；立法|New legislation aims to improve workplace safety.|新法律旨在改善工作场所安全。|词族：legislate → legislation；通常不可数
advocate|v. 提倡；拥护|Experts advocate greater investment in public transport.|专家提倡加大对公共交通的投资。|搭配：advocate doing something；也可作名词“拥护者”
discrimination|n. 歧视；辨别|The policy prohibits discrimination in employment.|该政策禁止就业歧视。|词族：discriminate → discrimination
cohesion|n. 凝聚力|Shared activities can strengthen social cohesion.|共同活动可以增强社会凝聚力。|搭配：social cohesion；形容词 cohesive
welfare|n. 福祉；福利|The project focuses on the welfare of local residents.|该项目关注当地居民的福祉。|搭配：social welfare / animal welfare`,
'经济职场': `allocate|v. 分配|The government will allocate more funds to education.|政府将为教育分配更多资金。|搭配：allocate something to；名词 allocation
incentive|n. 激励；刺激|Tax reductions provide an incentive to invest.|减税提供了投资的动力。|搭配：an incentive to do
fluctuate|v. 波动|Energy prices fluctuate throughout the year.|能源价格全年都在波动。|词族：fluctuate → fluctuation
productivity|n. 生产率|Better training can increase productivity.|更好的培训可以提高生产率。|词族：produce → productive → productivity
expenditure|n. 支出|Public expenditure on health has increased.|公共卫生支出增加了。|搭配：expenditure on；区别 income 收入
revenue|n. 收入；收益|The company earns most of its revenue from subscriptions.|该公司大部分收入来自订阅。|区别：revenue 收入，profit 利润
entrepreneur|n. 企业家；创业者|The scheme supports young entrepreneurs.|该计划支持年轻创业者。|词族：entrepreneur → entrepreneurship
recession|n. 经济衰退|Many businesses struggled during the recession.|许多企业在经济衰退期间陷入困境。|搭配：an economic recession
prosperity|n. 繁荣|Long-term prosperity depends on a skilled workforce.|长期繁荣依赖于熟练的劳动力。|词族：prosper → prosperous → prosperity
collaborate|v. 合作|Universities collaborate with industry on research.|大学与产业界合作开展研究。|搭配：collaborate with somebody on something`,
'观点论证': `nevertheless|adv. 然而；不过|The task was difficult; nevertheless, the team completed it.|任务很难；不过，团队完成了它。|转折信号词：前后信息方向发生变化
whereas|conj. 然而；鉴于|Some learners prefer audio, whereas others prefer text.|一些学习者喜欢音频，而另一些喜欢文字。|对比两个分句，注意前后对称
consequently|adv. 因此；结果|Demand increased; consequently, prices rose.|需求增加了；因此，价格上涨了。|词族：consequence → consequently
inherent|adj. 固有的；内在的|There are risks inherent in any major reform.|任何重大改革都有固有风险。|搭配：inherent in
plausible|adj. 看似合理的；貌似可信的|The researcher offered a plausible explanation.|研究人员给出了一个看似合理的解释。|看似合理不等于已经证实；搭配 plausible explanation
ambiguous|adj. 模棱两可的；不明确的|The wording of the question is ambiguous.|这个问题的措辞不明确。|词族：ambiguous → ambiguity
controversial|adj. 有争议的|The decision remains controversial.|这一决定仍有争议。|词族：controversy → controversial
contradict|v. 反驳；与……矛盾|The new findings contradict the earlier report.|新发现与先前的报告相矛盾。|词族：contradict → contradiction
justify|v. 证明……合理|The benefits may not justify the additional cost.|这些收益可能不足以证明额外成本合理。|词族：justify → justification
inevitable|adj. 不可避免的|Change is inevitable in a growing organization.|在一个不断发展的组织中，变化不可避免。|词族：inevitable → inevitably`,
'文化交流': `heritage|n. 遗产；传统|The museum preserves the region's cultural heritage.|该博物馆保护这个地区的文化遗产。|搭配：cultural heritage
preserve|v. 保护；保存|The project aims to preserve traditional skills.|该项目旨在保护传统技艺。|词族：preserve → preservation
diverse|adj. 多样的|The city is home to diverse communities.|这座城市有多样化的社群。|词族：diverse → diversity
contemporary|adj. 当代的|The exhibition explores contemporary Chinese art.|该展览探讨当代中国艺术。|搭配：contemporary art / society
interpret|v. 解释；口译|People may interpret the same message differently.|人们可能对同一信息作出不同解释。|词族：interpret → interpretation
perspective|n. 视角；观点|Travel can offer a different perspective on daily life.|旅行可以提供看待日常生活的不同视角。|搭配：from a different perspective
convention|n. 惯例；大会|The artist challenged established conventions.|这位艺术家挑战了既有惯例。|词族：convention → conventional
integrity|n. 正直；完整性|Academic integrity is essential to trustworthy research.|学术诚信对可信研究至关重要。|搭配：academic integrity
appreciate|v. 欣赏；感激；理解|Learning another language helps us appreciate other cultures.|学习另一种语言帮助我们欣赏其他文化。|搭配：appreciate doing something；名词 appreciation
transmit|v. 传递；传播|Stories transmit knowledge across generations.|故事在代际之间传递知识。|词族：transmit → transmission`,
'健康生活': `sedentary|adj. 久坐的|A sedentary lifestyle can affect physical health.|久坐的生活方式可能影响身体健康。|搭配：a sedentary lifestyle
nutrition|n. 营养|Good nutrition supports healthy development.|良好的营养支持健康发育。|词族：nutrition → nutritional
chronic|adj. 长期的；慢性的|Chronic stress may interfere with sleep.|长期压力可能干扰睡眠。|搭配：chronic stress / disease；对比 acute 急性的
adequate|adj. 足够的；适当的|Students need adequate sleep to concentrate.|学生需要充足的睡眠来集中注意力。|词族：adequate → adequately；反义 inadequate
cognitive|adj. 认知的|The study examined changes in cognitive performance.|该研究考察了认知表现的变化。|词族：cognition → cognitive
fatigue|n. 疲劳|Long working hours can lead to fatigue.|长时间工作可能导致疲劳。|搭配：mental fatigue
immune|adj. 免疫的；不受影响的|No organization is immune to change.|没有任何组织能不受变化的影响。|搭配：immune to；名词 immunity
intervention|n. 干预；介入|Early intervention can improve educational outcomes.|早期干预可以改善教育成果。|词族：intervene → intervention
prevalent|adj. 普遍的；流行的|This assumption is prevalent among new students.|这个假设在新生中很普遍。|词族：prevalent → prevalence
well-being|n. 幸福；身心健康|Social connections contribute to well-being.|社会联系有助于身心健康。|搭配：physical and mental well-being`,
'行动变化': `implement|v. 实施|The school will implement the new policy next term.|学校将在下学期实施新政策。|词族：implement → implementation
facilitate|v. 促进；使便利|Clear instructions facilitate effective communication.|清晰的说明有助于有效沟通。|搭配：facilitate learning / communication
undermine|v. 削弱；损害|Repeated delays can undermine public trust.|反复延误可能削弱公众信任。|搭配：undermine confidence / trust
exacerbate|v. 使恶化；加剧|A lack of planning can exacerbate traffic problems.|缺乏规划可能加剧交通问题。|搭配：exacerbate a problem；与 mitigate 对比记忆
alleviate|v. 减轻；缓解|Flexible schedules may alleviate pressure on employees.|灵活的时间安排可能缓解员工的压力。|搭配：alleviate pressure / poverty
compensate|v. 补偿；弥补|Extra practice can compensate for a lack of experience.|额外练习可以弥补经验不足。|搭配：compensate for；名词 compensation
anticipate|v. 预期；预料|Planners must anticipate future demand.|规划者必须预估未来需求。|词族：anticipate → anticipation
constrain|v. 限制；约束|Limited funding can constrain research.|有限的资金可能限制研究。|词族：constrain → constraint
enhance|v. 提高；增强|Constructive feedback can enhance learning.|建设性反馈可以促进学习。|词族：enhance → enhancement
adapt|v. 适应；改编|Workers need time to adapt to new systems.|员工需要时间适应新系统。|搭配：adapt to；区别 adopt 采用`};
export const words:Card[]=Object.entries(groups).flatMap(([topic,raw])=>raw.split('\n').map(row=>{const[term,meaning,example,translation,tip]=row.split('|');return{id:`w-${term}`,kind:'word' as const,term,meaning,example,translation,tip,topic}}));
const patternRows=`It is widely acknowledged that ...|人们普遍认为……|It is widely acknowledged that education shapes our future.|人们普遍认为教育塑造我们的未来。|that 后接完整从句；观点仍需事实支持。|引入观点
There is growing concern that ...|人们越来越担忧……|There is growing concern that personal data may be misused.|人们越来越担忧个人数据可能被滥用。|用 concern that 引出担忧的内容。|引入观点
What matters most is ...|最重要的是……|What matters most is whether students can apply what they learn.|最重要的是学生能否运用所学知识。|What 引导主语从句，谓语通常用 is。|强调重点
Whether ... depends on ...|是否……取决于……|Whether the policy succeeds depends on public support.|该政策能否成功取决于公众支持。|Whether 引导主语从句；depend on 后可接名词。|条件分析
Not only ... but also ...|不仅……而且……|Not only does reading expand our vocabulary, but it also broadens our horizons.|阅读不仅拓展词汇量，也开阔视野。|Not only 位于句首时，第一个分句部分倒装。|递进补充
The more ..., the more ...|越……就越……|The more regularly we practise, the more confidently we communicate.|我们练习越规律，交流就越自信。|两个比较级结构对应；避免漏掉 the。|关联变化
Only by ... can we ...|只有通过……我们才能……|Only by working together can we solve this problem.|只有共同努力，我们才能解决这个问题。|Only + 状语放句首时，主句部分倒装。|提出措施
It is ... that ...|正是……|It is consistent practice that makes a difference.|正是持续练习带来了改变。|强调句：去掉 It is 和 that 后，句子主干仍完整。|强调重点
Despite ..., ...|尽管……，但是……|Despite its convenience, online learning requires self-discipline.|尽管在线学习很方便，它仍需要自律。|despite 后接名词或动名词，不直接接完整句子。|让步转折
While it is true that ..., ...|虽然……属实，但……|While it is true that technology saves time, it can also distract us.|虽然技术确实节省时间，但它也会让人分心。|while 引导让步从句；主句呈现限制或另一面。|让步转折
Rather than ..., ...|与其……，不如……|Rather than memorize isolated words, learners should study them in context.|与其记忆孤立的单词，学习者不如在语境中学习。|本例 rather than 后用动词原形，与主句动作形成对比。|对比选择
A is not necessarily B.|A 未必是 B。|More information is not necessarily better information.|更多信息未必是更好的信息。|not necessarily 表示“未必”，不是“一定不”。|谨慎论证
This can be attributed to ...|这可以归因于……|This improvement can be attributed to regular feedback.|这一进步可以归因于定期反馈。|attribute A to B：把 A 归因于 B。|原因结果
... plays a crucial role in ...|……在……中发挥关键作用|Education plays a crucial role in reducing inequality.|教育在减少不平等方面发挥关键作用。|in 是介词，后面的动词用 -ing 形式。|原因结果
... gives rise to ...|……导致……|Rapid urbanization gives rise to new challenges.|快速城镇化带来了新的挑战。|give rise to 后接名词；注意主谓一致。|原因结果
... at the expense of ...|……以牺牲……为代价|Economic growth should not come at the expense of the environment.|经济增长不应以牺牲环境为代价。|at the expense of 后接被牺牲的事物。|权衡利弊
A balance should be struck between ... and ...|应在……与……之间取得平衡|A balance should be struck between efficiency and fairness.|应在效率与公平之间取得平衡。|固定搭配：strike a balance between A and B。|权衡利弊
There is no guarantee that ...|不能保证……|There is no guarantee that a larger budget will lead to better results.|不能保证更大的预算会带来更好的结果。|that 从句说明不能保证的内容，避免绝对化结论。|谨慎论证
The extent to which ... depends on ...|……的程度取决于……|The extent to which students benefit depends on how they use the resources.|学生受益的程度取决于他们如何使用资源。|to which 引导修饰 extent 的定语从句。|长句理解
..., which in turn ...|……，这反过来又……|Exercise improves sleep, which in turn supports concentration.|运动改善睡眠，而睡眠又有助于专注。|which 可指代前面的情况；in turn 连接后续影响。|长句理解
Had it not been for ..., ... would have ...|要不是……，本来就会……|Had it not been for public support, the project would have failed.|要不是公众支持，这个项目本来就会失败。|过去虚拟条件句的倒装；主句用 would have + 过去分词。|条件分析
It is essential that ... (should) ...|……至关重要|It is essential that every student have access to reliable information.|每位学生都能获取可靠信息至关重要。|建议或必要性结构中用动词原形，如 have；也可用 should have。|提出措施
Taking ... into account, ...|考虑到……，……|Taking these factors into account, we should adopt a flexible approach.|考虑到这些因素，我们应采取灵活的方法。|分词短语的逻辑主语应与主句主语一致。|归纳结论
In the long run, ...|从长远来看，……|In the long run, investment in education benefits the whole society.|从长远来看，教育投资使整个社会受益。|与 in the short term（短期内）对比使用。|归纳结论`;
export const patterns:Card[]=patternRows.split('\n').map((row,i)=>{const[term,meaning,example,translation,tip,topic]=row.split('|');return{id:`p-${i+1}`,kind:'pattern',term,meaning,example,translation,tip,topic}});
export const cards=[...words,...patterns];
export const sources=[
 {title:'教育部教育考试院 · CET-6 试卷结构',url:'https://cet.neea.cn/xhtml1/report/16123/201-1.htm',detail:'写作 15% / 30 分钟；听力 35% / 30 分钟；阅读 35% / 40 分钟；翻译 15% / 30 分钟。答题时长合计 130 分钟，另有考试组织时间。'},
 {title:'教育部教育考试院 · 2026 年下半年考试公告',url:'https://cet.neea.cn/xhtml1/report/2609/1-1.htm',detail:'六级笔试：2026 年 12 月 12 日 15:00–17:25。报名时间以所在学校通知为准。'},
 {title:'教育部教育考试院 · 分数解释',url:'https://cet.neea.cn/xhtml1/folder/19081/5124-1.htm',detail:'报道总分 710 分，采用常模参照方式，不设官方及格线。本应用不把练习正确率换算为六级分数。'},
 {title:'Dunlosky 等（2013）· 学习方法综述',url:'https://journals.sagepub.com/doi/10.1177/1529100612453266',detail:'练习测试和分散练习被评为高效用方法。自我解释、交错练习等具有情境限制，不能假定对所有任务同样有效。'},
 {title:'APS · Which Study Strategies Make the Grade?',url:'https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html',detail:'研究综述的通俗说明：把学习分散到不同时间，并尝试自行提取答案，而不只反复阅读或划线。'},
 {title:'Roediger & Karpicke（2006）· Test-Enhanced Learning',url:'https://doi.org/10.1111/j.1467-9280.2006.01693.x',detail:'检索练习研究关注延迟保持，提示短期熟悉感与长期记忆效果可能不同。'}
];
