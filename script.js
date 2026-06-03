/* ═══════════════════════════════════════════════════════════
   SELECTED LABS IN AI – STUDY HUB
   script.js  ·  All questions extracted from uploaded PDFs
═══════════════════════════════════════════════════════════ */

// ══════════════════════════════════════════
// 1. QUESTION DATABASE
//    All questions extracted from:
//    - Selected_Ai_Final_Exam_2026_.pdf  (93 MCQs + 36 T/F)
//    - Selected_Ai_Question_Bank_2026.pdf (quizzes 2024-2026)
// ══════════════════════════════════════════

const TOPICS = {
  RL:   'Reinforcement Learning',
  GEN:  'Generative AI',
  LLM:  'LLMs & Transformers',
  CNN:  'Convolutional Neural Networks',
  RNN:  'Recurrent Neural Networks',
  LSTM: 'LSTM Networks',
  DL:   'Deep Learning Basics',
  PY:   'Python & Libraries',
};

/* Each question object:
   { id, type:'mcq'|'tf', topic, q, options?[], answer, source? }
   For MCQ: answer is the letter 'a'–'d'
   For T/F: answer is 'True' or 'False', correction is optional string
*/
const ALL_QUESTIONS = [

  // ────────────────────────────────────────
  //  REINFORCEMENT LEARNING  (Q1-Q19, Q82-Q84)
  // ────────────────────────────────────────
  { id:1,  type:'mcq', topic:'RL', q:'Reinforcement learning is an area of ……………',
    options:['Supervised learning','Unsupervised learning','Machine Learning','None of them'], answer:'c' },

  { id:2,  type:'mcq', topic:'RL', q:'In reinforcement learning, the agent takes action to maximize ……………',
    options:['Accuracy','Reward','Data','Loss'], answer:'b' },

  { id:3,  type:'mcq', topic:'RL', q:'Which learning approach is described as "With teacher"?',
    options:['Unsupervised','Reinforcement','Supervised','Generative'], answer:'c' },

  { id:4,  type:'mcq', topic:'RL', q:'Which learning approach is described as "Without teacher"?',
    options:['Supervised','Unsupervised','Reinforcement','Deep learning'], answer:'b' },

  { id:5,  type:'mcq', topic:'RL', q:'In supervised learning, the training data has the ……………',
    options:['Answer key','Reward signal','No labels','Only states'], answer:'a' },

  { id:6,  type:'mcq', topic:'RL', q:'In reinforcement learning, there is …………… answer key in training data.',
    options:['always','sometimes','no','a partial'], answer:'c' },

  { id:7,  type:'mcq', topic:'RL', q:'Reinforcement learning is the science of ……………',
    options:['Data processing','Decision making','Image recognition','Clustering'], answer:'b' },

  { id:8,  type:'mcq', topic:'RL', q:'In RL, after each action, the algorithm receives ……………',
    options:['A new dataset','A fixed label','Feedback','A supervised signal'], answer:'c' },

  { id:9,  type:'mcq', topic:'RL', q:'Feedback in RL helps determine if the choice was correct, neutral, or ……………',
    options:['Random','Incorrect','Unsupervised','Final'], answer:'b' },

  { id:10, type:'mcq', topic:'RL', q:'In RL, the best solution is decided based on ……………',
    options:['Minimum error','Maximum reward','Maximum data','Minimum computation'], answer:'b' },

  { id:11, type:'mcq', topic:'RL', q:'Which of the following is an application of reinforcement learning?',
    options:['Housing price prediction','Robotics','Sentiment analysis','Text summarization'], answer:'b' },

  { id:12, type:'mcq', topic:'RL', q:'A master chess player making a move is an example of ……………',
    options:['Supervised learning','Unsupervised learning','Reinforcement learning','Generative AI'], answer:'c' },

  { id:13, type:'mcq', topic:'RL', q:'An adaptive controller adjusting refinery operations in real time is an application of ……………',
    options:['Supervised learning','Reinforcement learning','Clustering','Classification'], answer:'b' },

  { id:14, type:'mcq', topic:'RL', q:'Which of the following is an advantage of reinforcement learning?',
    options:['It is preferable for simple problems','It requires little data','It can solve very complex problems','It always has interpretable behavior'], answer:'c' },

  { id:15, type:'mcq', topic:'RL', q:'In RL, training data is obtained via ……………',
    options:['Labeled datasets','Unlabeled datasets','Direct interaction of the agent with the environment','External supervision only'], answer:'c' },

  { id:16, type:'mcq', topic:'RL', q:'RL can handle environments that are ……………',
    options:['Deterministic only','Non-deterministic','Always predictable','Without outcomes'], answer:'b' },

  { id:17, type:'mcq', topic:'RL', q:'Which of the following is a disadvantage of reinforcement learning?',
    options:['It cannot correct errors','It needs a lot of data and computation','It is not flexible','It only works for simple problems'], answer:'b' },

  { id:18, type:'mcq', topic:'RL', q:'RL is highly dependent on the quality of the ……………',
    options:['Input data','Reward function','Number of epochs','Pooling layer'], answer:'b' },

  { id:19, type:'mcq', topic:'RL', q:'If the reward function is poorly designed, the agent may ……………',
    options:['Learn faster','Not learn desired behavior','Always be correct','Require less data'], answer:'b' },

  { id:82, type:'mcq', topic:'RL', q:'Which statement about reinforcement learning is correct?',
    options:['Data is part of the input in RL','RL uses labeled answer keys','The agent decides what to do to perform the task','RL cannot handle non-deterministic environments'], answer:'c' },

  { id:83, type:'mcq', topic:'RL', q:'Which is NOT an advantage of RL?',
    options:['Can correct errors during training','Solves complex problems','Needs little computation','Flexible with other ML techniques'], answer:'c' },

  { id:84, type:'mcq', topic:'RL', q:'Which is a disadvantage of RL?',
    options:['Cannot handle non-deterministic environments','Difficult to debug and interpret','Always needs supervised data','Only works for robotics'], answer:'b' },

  // ────────────────────────────────────────
  //  GENERATIVE AI  (Q20-Q27, Q73-Q77, Q93)
  // ────────────────────────────────────────
  { id:20, type:'mcq', topic:'GEN', q:'Which type of AI can create new content based on patterns from existing data?',
    options:['Discriminative AI','Generative AI','Reactive AI','Rule-based AI'], answer:'b' },

  { id:21, type:'mcq', topic:'GEN', q:'Generative AI can create all of the following EXCEPT ……………',
    options:['Text','Images','Untrained random noise without patterns','Audio'], answer:'c' },

  { id:22, type:'mcq', topic:'GEN', q:'ChatGPT is an example of ……………',
    options:['Image generation model','Text generation model','Robotics model','Pooling model'], answer:'b' },

  { id:23, type:'mcq', topic:'GEN', q:'DALL·E is known for generating ……………',
    options:['Text','Code','Images','Music'], answer:'c' },

  { id:24, type:'mcq', topic:'GEN', q:'Which phase is NOT part of how generative AI works?',
    options:['Training','Tuning','Backpropagation only','Generation, evaluation and retuning'], answer:'c' },

  { id:73, type:'mcq', topic:'GEN', q:'Which of the following is a generative AI application?',
    options:['Housing price prediction','Image classification','Text generation','Sentiment analysis (as classification)'], answer:'c' },

  { id:74, type:'mcq', topic:'GEN', q:'GitHub Copilot generates ……………',
    options:['Images','Music','Code','Video'], answer:'c' },

  { id:75, type:'mcq', topic:'GEN', q:'Jukebox (by OpenAI) generates ……………',
    options:['Text','Music','Images','Code'], answer:'b' },

  { id:76, type:'mcq', topic:'GEN', q:'The tuning phase of generative AI tailors the foundation model to a ……………',
    options:['Larger dataset','Specific gen AI application','Different algorithm','Smaller GPU'], answer:'b' },

  { id:77, type:'mcq', topic:'GEN', q:'Multimodal foundation models support …………… kinds of content generation.',
    options:['Only one','Two','Several','Zero'], answer:'c' },

  { id:93, type:'mcq', topic:'GEN', q:'Which statement about generative AI is true?',
    options:['It only makes predictions about data','It learns to generate objects similar to training data','It requires structured labeled data','It cannot generate images'], answer:'b' },

  // ────────────────────────────────────────
  //  LLMs & TRANSFORMERS  (Q25-Q32, Q86-Q87)
  // ────────────────────────────────────────
  { id:25, type:'mcq', topic:'LLM', q:'The most common foundation models today are ……………',
    options:['Convolutional Neural Networks','Large Language Models (LLMs)','Recurrent Neural Networks','Autoencoders'], answer:'b' },

  { id:26, type:'mcq', topic:'LLM', q:'To create a foundation model, practitioners train on ……………',
    options:['Small labeled data','Huge volumes of raw, unstructured, unlabeled data','Only numerical data','Only image data'], answer:'b' },

  { id:27, type:'mcq', topic:'LLM', q:'During training of a foundation model, the algorithm performs millions of …………… exercises.',
    options:['Multiple choice','Fill in the blank','Image classification','Clustering'], answer:'b' },

  { id:28, type:'mcq', topic:'LLM', q:'The transformer architecture was introduced by researchers at …………… in 2017.',
    options:['OpenAI','Meta','Google','Anthropic'], answer:'c' },

  { id:29, type:'mcq', topic:'LLM', q:'In a transformer, an attention map captures each token\'s relationships with ……………',
    options:['Only the next token','All other tokens','Only previous tokens','Only the first token'], answer:'b' },

  { id:30, type:'mcq', topic:'LLM', q:'A Large Language Model is trained on massive amounts of ……………',
    options:['Image data','Audio data','Text data','Video data'], answer:'c' },

  { id:31, type:'mcq', topic:'LLM', q:'An LLM uses probability and pattern matching to ……………',
    options:['Think like a human','Understand like a human','Simulate understanding','Never generate text'], answer:'c' },

  { id:32, type:'mcq', topic:'LLM', q:'Which of the following is a famous LLM example?',
    options:['AlexNet','VGGNet','ChatGPT','ResNet'], answer:'c' },

  { id:86, type:'mcq', topic:'LLM', q:'A transformer encodes each word as a ……………',
    options:['Filter','Token','Pool','Kernel'], answer:'b' },

  { id:87, type:'mcq', topic:'LLM', q:'The attention map helps the transformer understand …………… when generating text.',
    options:['Grammar only','Context','Spelling','Font'], answer:'b' },

  // ────────────────────────────────────────
  //  DEEP LEARNING BASICS  (Q33)
  // ────────────────────────────────────────
  { id:33, type:'mcq', topic:'DL', q:'Deep learning is part of which layer of AI?',
    options:['Supervised only','Unsupervised only','Layers of AI include Machine Learning and Deep Learning','Robotics only'], answer:'c' },

  // ────────────────────────────────────────
  //  CONVOLUTIONAL NEURAL NETWORKS  (Q34-Q61, Q85, Q88-Q92)
  // ────────────────────────────────────────
  { id:34, type:'mcq', topic:'CNN', q:'CNN stands for ……………',
    options:['Convolutional Neural Network','Recurrent Neural Network','Generative Network','Deep Network'], answer:'a' },

  { id:35, type:'mcq', topic:'CNN', q:'The most widely used deep learning method for image processing is ……………',
    options:['RNN','LSTM','CNN','Transformer'], answer:'c' },

  { id:36, type:'mcq', topic:'CNN', q:'CNN architectures make the explicit assumption that inputs are ……………',
    options:['Text','Audio','Images','Time series'], answer:'c' },

  { id:37, type:'mcq', topic:'CNN', q:'In a CNN, convolutional layers apply a …………… operation to the input.',
    options:['Pooling','Convolution','Flattening','Softmax'], answer:'b' },

  { id:38, type:'mcq', topic:'CNN', q:'A fully connected layer for a small 100×100 image would have …………… weights for each neuron in the second layer.',
    options:['100','1000','10000','100000'], answer:'c' },

  { id:39, type:'mcq', topic:'CNN', q:'The convolution operation reduces the number of ……………',
    options:['Layers','Free parameters','Images','Pooling operations'], answer:'b' },

  { id:40, type:'mcq', topic:'CNN', q:'Tiling regions of size 5×5 with shared weights requires only …………… learnable parameters.',
    options:['5','10','25','50'], answer:'c' },

  { id:41, type:'mcq', topic:'CNN', q:'Max pooling uses the …………… value from each cluster of neurons.',
    options:['Average','Minimum','Maximum','Sum'], answer:'c' },

  { id:42, type:'mcq', topic:'CNN', q:'Average pooling uses the …………… value from each cluster.',
    options:['Maximum','Minimum','Average','Sum'], answer:'c' },

  { id:43, type:'mcq', topic:'CNN', q:'Which of the following is a classic CNN model?',
    options:['Inception-V3','ResNet-101','AlexNet','GoogleNet'], answer:'c' },

  { id:44, type:'mcq', topic:'CNN', q:'Which CNN model is part of the Inception models?',
    options:['AlexNet','VGGNet','GoogleNet','ResNet-101'], answer:'c' },

  { id:45, type:'mcq', topic:'CNN', q:'All those CNN architectures are trained on …………… data.',
    options:['ImageNet','CIFAR','MNIST','COCO'], answer:'a' },

  { id:46, type:'mcq', topic:'CNN', q:'The two main parts of a CNN model are Feature Learning and ……………',
    options:['Pooling','Classification','Convolution','Backpropagation'], answer:'b' },

  { id:47, type:'mcq', topic:'CNN', q:'In CNN, features are extracted through Convolution Layer and …………… Layer.',
    options:['Fully Connected','Softmax','Pooling','Input'], answer:'c' },

  { id:48, type:'mcq', topic:'CNN', q:'The convolution operation uses a linear function known as the ……………',
    options:['Kernel or filter','Pool','Stride','Padding'], answer:'a' },

  { id:49, type:'mcq', topic:'CNN', q:'Stride determines the …………… by which the filter moves upon the image.',
    options:['Direction','Step size','Color','Depth'], answer:'b' },

  { id:50, type:'mcq', topic:'CNN', q:'Zero padding is a practice where …………… are added on each side of the input.',
    options:['Ones','Zeros','Random numbers','Negative values'], answer:'b' },

  { id:51, type:'mcq', topic:'CNN', q:'The most commonly used activation function in CNNs is ……………',
    options:['Sigmoid','Tanh','ReLU','Softmax'], answer:'c' },

  { id:52, type:'mcq', topic:'CNN', q:'ReLU eliminates …………… values.',
    options:['Positive','Negative','Zero','All'], answer:'b' },

  { id:53, type:'mcq', topic:'CNN', q:'A CNN with ReLU trains much …………… than with hyperbolic tangent.',
    options:['Slower','Faster','Similarly','Unpredictably'], answer:'b' },

  { id:54, type:'mcq', topic:'CNN', q:'In the pooling layer, the spatial size of convoluted features is ……………',
    options:['Increased','Reduced','Unchanged','Doubled'], answer:'b' },

  { id:55, type:'mcq', topic:'CNN', q:'Which type of pooling uses the maximum value?',
    options:['Sum pooling','Average pooling','Max pooling','Min pooling'], answer:'c' },

  { id:56, type:'mcq', topic:'CNN', q:'After feature extraction, the result is …………… into a single vector.',
    options:['Flattened','Pooled','Convolved','Normalized'], answer:'a' },

  { id:57, type:'mcq', topic:'CNN', q:'The flattened vector becomes input for the ……………',
    options:['Convolutional layer','Pooling layer','Fully connected layer','ReLU layer'], answer:'c' },

  { id:58, type:'mcq', topic:'CNN', q:'The operation inside a fully connected layer transforms a multi-dimensional matrix into a ……………',
    options:['Scalar','Vector (one-dimensional array)','Higher dimension','Image'], answer:'b' },

  { id:59, type:'mcq', topic:'CNN', q:'The last fully connected layer in a CNN provides a …………… for each object.',
    options:['Score or probability','Binary output','Kernel','Pooling index'], answer:'a' },

  { id:60, type:'mcq', topic:'CNN', q:'The SoftMax layer translates the input array into a vector with …………… for each class.',
    options:['Probability','Binary value','Integer','Kernel value'], answer:'a' },

  { id:61, type:'mcq', topic:'CNN', q:'The sum of outputs from a SoftMax function equals ……………',
    options:['0','1','100','Depends on classes'], answer:'b' },

  { id:85, type:'mcq', topic:'CNN', q:'In CNN, the output of the final convolutional layer is flattened before entering ……………',
    options:['Softmax directly','Fully connected layer','Another convolutional layer','Pooling layer'], answer:'b' },

  { id:88, type:'mcq', topic:'CNN', q:'Which of the following is a residual CNN model?',
    options:['AlexNet','VGGNet','ResNet-101','GoogleNet'], answer:'c' },

  { id:89, type:'mcq', topic:'CNN', q:'In CNN, padding formula P = (k-1)/2 assumes ……………',
    options:['k is stride','k is filter dimension','k is number of filters','k is pooling size'], answer:'b' },

  { id:90, type:'mcq', topic:'CNN', q:'The convolution output dimension formula includes n, p, f, s and ……………',
    options:['Number of classes','Number of filters (nf)','Learning rate','Batch size'], answer:'b' },

  { id:91, type:'mcq', topic:'CNN', q:'In CNN, number of values in a layer = (K × K × F + 1) × D where D is ……………',
    options:['Depth of input','Number of filters','Stride','Padding'], answer:'b' },

  { id:92, type:'mcq', topic:'CNN', q:'Which activation function is commonly used in fully connected layers after flattening?',
    options:['Only ReLU','Various including ReLU and Softmax at end','Only sigmoid','No activation'], answer:'b' },

  // ────────────────────────────────────────
  //  RECURRENT NEURAL NETWORKS  (Q62-Q70)
  // ────────────────────────────────────────
  { id:62, type:'mcq', topic:'RNN', q:'RNN stands for ……………',
    options:['Recurrent Neural Network','Reinforcement Network','Regular Network','Residual Network'], answer:'a' },

  { id:63, type:'mcq', topic:'RNN', q:'RNNs are distinguished by their ……………',
    options:['Depth','Memory','Width','Pooling layers'], answer:'b' },

  { id:64, type:'mcq', topic:'RNN', q:'In RNNs, output depends on prior elements within the ……………',
    options:['Batch','Sequence','Epoch','Filter'], answer:'b' },

  { id:65, type:'mcq', topic:'RNN', q:'RNNs are key technology for ……………',
    options:['Image processing only','Sequential data','Unstructured data only','Tabular data'], answer:'b' },

  { id:66, type:'mcq', topic:'RNN', q:'Signal processing is naturally …………… data.',
    options:['Random','Sequential','Static','Categorical'], answer:'b' },

  { id:67, type:'mcq', topic:'RNN', q:'RNNs maintain a …………… at each time step to track context.',
    options:['Filter','Hidden state','Pool','Kernel'], answer:'b' },

  { id:68, type:'mcq', topic:'RNN', q:'The feedback loop in an RNN passes the hidden state from one time step to the ……………',
    options:['Previous','Next','Same','Random'], answer:'b' },

  { id:69, type:'mcq', topic:'RNN', q:'A weakness of RNNs is the vanishing and exploding …………… problems.',
    options:['Gradient','Data','Reward','Kernel'], answer:'a' },

  // ────────────────────────────────────────
  //  LSTM NETWORKS  (Q70-Q72)
  // ────────────────────────────────────────
  { id:70, type:'mcq', topic:'LSTM', q:'LSTM is a popular architecture to solve the …………… problem.',
    options:['Overfitting','Vanishing gradient','Underfitting','Data scarcity'], answer:'b' },

  { id:71, type:'mcq', topic:'LSTM', q:'LSTM networks have cells with three gates: input gate, output gate, and …………… gate.',
    options:['Update','Forget','Memory','Reset'], answer:'b' },

  { id:72, type:'mcq', topic:'LSTM', q:'In LSTM, the forget gate controls what information to …………… from cell state.',
    options:['Add','Keep','Exclude','Multiply'], answer:'c' },

  // ────────────────────────────────────────
  //  PYTHON & LIBRARIES  (Q78-Q81)
  // ────────────────────────────────────────
  { id:78, type:'mcq', topic:'PY', q:'In Python, TextBlob is used for ……………',
    options:['Image generation','Sentiment analysis','CNN training','LSTM prediction'], answer:'b' },

  { id:79, type:'mcq', topic:'PY', q:'TextBlob sentiment polarity ranges from ……………',
    options:['0 to 1','-1 to 1','0 to 100','-100 to 100'], answer:'b' },

  { id:80, type:'mcq', topic:'PY', q:'In the sentiment analysis example, polarity > 0 returns ……………',
    options:['Neutral','Negative','Positive','Error'], answer:'c' },

  { id:81, type:'mcq', topic:'PY', q:'Which library provides the text-generation pipeline in Python?',
    options:['textblob','sklearn','transformers','numpy'], answer:'c' },

  // ════════════════════════════════════════
  //  TRUE / FALSE  (Final Exam + Quizzes)
  // ════════════════════════════════════════

  // ── RL T/F ──
  { id:201, type:'tf', topic:'RL', q:'Data is part of the input in reinforcement learning.',
    answer:'False', correction:'Data is NOT part of the input in RL.' },

  { id:202, type:'tf', topic:'RL', q:'Reinforcement learning uses algorithms that learn from outcomes.',
    answer:'True' },

  { id:203, type:'tf', topic:'RL', q:'In supervised learning, the training data has no answer key.',
    answer:'False', correction:'Supervised learning DOES have an answer key.' },

  { id:204, type:'tf', topic:'RL', q:'Reinforcement learning is the science of decision making.',
    answer:'True' },

  { id:205, type:'tf', topic:'RL', q:'Reinforcement learning can only handle deterministic environments.',
    answer:'False', correction:'RL can handle non-deterministic environments.' },

  { id:206, type:'tf', topic:'RL', q:'Reinforcement learning is preferable for solving simple problems.',
    answer:'False', correction:'RL is NOT preferable for simple problems.' },

  { id:207, type:'tf', topic:'RL', q:'In RL, the model can correct errors that occurred during training.',
    answer:'True' },

  { id:208, type:'tf', topic:'RL', q:'Reinforcement learning is highly dependent on the quality of the input image.',
    answer:'False', correction:'RL depends on the quality of the reward function, not input image.' },

  // ── Gen AI T/F ──
  { id:209, type:'tf', topic:'GEN', q:'Generative AI can create new content based on patterns from existing data.',
    answer:'True' },

  { id:210, type:'tf', topic:'GEN', q:'ChatGPT is an example of an image generation model.',
    answer:'False', correction:'ChatGPT is a TEXT generation model.' },

  { id:211, type:'tf', topic:'GEN', q:'Foundation models are trained on small labeled datasets.',
    answer:'False', correction:'They are trained on huge volumes of raw, unstructured, unlabeled data.' },

  { id:212, type:'tf', topic:'GEN', q:'Generative AI operates in two phases: training and testing.',
    answer:'False', correction:'It operates in three phases: Training, Tuning, and Generation/evaluation/retuning.' },

  // ── LLM T/F ──
  { id:213, type:'tf', topic:'LLM', q:'The transformer architecture was introduced by researchers at OpenAI.',
    answer:'False', correction:'It was introduced by researchers at Google in 2017.' },

  { id:214, type:'tf', topic:'LLM', q:'An LLM understands language like a human.',
    answer:'False', correction:'LLMs do NOT understand language; they use probability and pattern matching to simulate understanding.' },

  // ── CNN T/F ──
  { id:215, type:'tf', topic:'CNN', q:'CNNs are one of the most powerful tools for image processing.',
    answer:'True' },

  { id:216, type:'tf', topic:'CNN', q:'CNN architectures assume that inputs are audio signals.',
    answer:'False', correction:'CNNs assume inputs are images.' },

  { id:217, type:'tf', topic:'CNN', q:'The convolution operation reduces the number of free parameters.',
    answer:'True' },

  { id:218, type:'tf', topic:'CNN', q:'Max pooling uses the average value from each cluster of neurons.',
    answer:'False', correction:'Max pooling uses the MAXIMUM value.' },

  { id:219, type:'tf', topic:'CNN', q:'AlexNet is part of the Inception models.',
    answer:'False', correction:'AlexNet is a classic CNN model; GoogleNet is part of Inception models.' },

  { id:220, type:'tf', topic:'CNN', q:'In CNN, feature extraction uses Convolution Layer and Pooling Layer.',
    answer:'True' },

  { id:221, type:'tf', topic:'CNN', q:'ReLU activation function eliminates positive values.',
    answer:'False', correction:'ReLU eliminates NEGATIVE values.' },

  { id:222, type:'tf', topic:'CNN', q:'The SoftMax function outputs probabilities that sum to 1.',
    answer:'True' },

  { id:223, type:'tf', topic:'CNN', q:'In CNN, stride determines the direction of the filter.',
    answer:'False', correction:'Stride determines the STEP SIZE of the filter.' },

  { id:224, type:'tf', topic:'CNN', q:'Zero padding adds a column and row of zeros on each side of the input.',
    answer:'True' },

  { id:225, type:'tf', topic:'CNN', q:'A CNN with ReLU trains much slower than with hyperbolic tangent.',
    answer:'False', correction:'CNN with ReLU trains much FASTER.' },

  { id:226, type:'tf', topic:'CNN', q:'The fully connected layer connects every neuron in one layer to every neuron in another layer.',
    answer:'True' },

  { id:227, type:'tf', topic:'CNN', q:'The last fully connected layer in a CNN provides a binary output only.',
    answer:'False', correction:'It provides a score or probability for each object.' },

  { id:228, type:'tf', topic:'CNN', q:'DALL·E is a text generation model.',
    answer:'False', correction:'DALL·E is an IMAGE generation model.' },

  // ── RNN T/F ──
  { id:229, type:'tf', topic:'RNN', q:'RNNs take information from prior inputs to influence current input and output.',
    answer:'True' },

  { id:230, type:'tf', topic:'RNN', q:'RNNs assume inputs and outputs are independent of each other.',
    answer:'False', correction:'RNNs depend on prior elements within the sequence.' },

  { id:231, type:'tf', topic:'RNN', q:'A weakness of RNNs is the vanishing and exploding gradient problems.',
    answer:'True' },

  { id:232, type:'tf', topic:'RNN', q:'The output of an RNN at each time step depends only on the current input.',
    answer:'False', correction:'RNN output also depends on the hidden state from previous time steps.' },

  { id:233, type:'tf', topic:'RNN', q:'RNNs handle sequences by converting sequences into numerical labels.',
    answer:'False', correction:'RNNs handle sequences through hidden state memory, not simple label conversion.' },

  { id:234, type:'tf', topic:'RNN', q:'Traditional deep learning networks assume each input and output is dependent on previous elements in the sequence.',
    answer:'False', correction:'Traditional networks assume independence; RNNs handle sequential dependencies.' },

  { id:235, type:'tf', topic:'RNN', q:'Because of their feedback loops, RNNs are immune to vanishing gradients during training.',
    answer:'False', correction:'RNNs SUFFER from vanishing gradient problems.' },

  // ── LSTM T/F ──
  { id:236, type:'tf', topic:'LSTM', q:'LSTMs solve the exploding gradient problem by using three gates.',
    answer:'True' },

  { id:237, type:'tf', topic:'LSTM', q:'In LSTM, the forget gate controls what information to add to the cell state.',
    answer:'False', correction:'The forget gate controls what information to EXCLUDE from cell state.' },

  { id:238, type:'tf', topic:'LSTM', q:'LSTM cells use three gates—input, output, and forget—to control information flow and help address vanishing gradients.',
    answer:'True' },

  { id:239, type:'tf', topic:'LSTM', q:'The vanishing gradient problem can make it difficult to train deep RNNs.',
    answer:'True' },

  { id:240, type:'tf', topic:'LSTM', q:'RNNs assume that the output at each time step is independent of the previous outputs.',
    answer:'False', correction:'RNN outputs depend on prior elements in the sequence.' },

  // ── Python T/F ──
  { id:241, type:'tf', topic:'PY', q:'TextBlob can be used to analyze sentiment in Python.',
    answer:'True' },

  { id:242, type:'tf', topic:'PY', q:'In the sentiment analysis example, polarity equal to 0 returns "Positive".',
    answer:'False', correction:'Polarity = 0 returns "Neutral".' },

  { id:243, type:'tf', topic:'PY', q:'The transformers library provides pipelines for text generation and summarization.',
    answer:'True' },

  // ── Quiz Bank questions (unique ones not already in DB) ──
  { id:301, type:'mcq', topic:'RL', q:'What is the input to a reinforcement learning model?',
    options:['An initial state','A reward-only file','A completed solution','A pre-labeled dataset'], answer:'a',
    source:'Quiz 2025' },

  { id:302, type:'tf', topic:'RL', q:'Reinforcement learning can be combined with deep learning to improve performance.',
    answer:'True', source:'Quiz 2025' },

  { id:303, type:'mcq', topic:'GEN', q:'What is the primary purpose of generative AI?',
    options:['Optimize search algorithms','Predict future data values','Create new content based on learned patterns','Store data efficiently'], answer:'c',
    source:'Quiz 2 2026' },

  { id:304, type:'mcq', topic:'GEN', q:'Which of the following is a phase in the generative AI lifecycle?',
    options:['Deployment','Tuning','Encryption','Testing'], answer:'b',
    source:'Quiz 2 2026' },

  { id:305, type:'mcq', topic:'LLM', q:'Which of these is NOT a typical use of Large Language Models?',
    options:['Story writing','Text summarization','Image enhancement','Machine translation'], answer:'c',
    source:'Quiz 2 2026' },

  { id:306, type:'mcq', topic:'PY', q:'To determine the sentiment of a text, you have to measure the ……………',
    options:['response','transformity','polarity','accuracy'], answer:'c',
    source:'Quiz 2 2026' },

  { id:307, type:'mcq', topic:'LSTM', q:'What is the role of the "forget gate" in an LSTM cell?',
    options:['It removes information that is no longer useful','It randomly drops information to reduce overfitting','It stores all past inputs for future use','It initializes weights'], answer:'a',
    source:'Quiz 2 2025' },

  { id:308, type:'mcq', topic:'RNN', q:'Which of the following is NOT a typical application of RNNs?',
    options:['Signal Processing','Text Generation','Image Segmentation','Machine Translation'], answer:'c',
    source:'Quiz 2 2025' },

  { id:309, type:'mcq', topic:'RNN', q:'Which of the following best describes the main advantage of RNNs over traditional deep learning networks?',
    options:['They can process only image data','They require less training data','They consider sequential information through memory of previous inputs','They are faster to train'], answer:'c',
    source:'Quiz 2 2025' },

  { id:310, type:'mcq', topic:'RNN', q:'What makes RNNs different from traditional neural networks?',
    options:['They use only one hidden layer','They process inputs in parallel','They ignore previous inputs','They have memory of prior inputs'], answer:'d',
    source:'Quiz 1 2026' },

  { id:311, type:'mcq', topic:'LSTM', q:'What problem is LSTM designed to solve in RNNs?',
    options:['Overfitting','Slow convergence','Vanishing gradient','Exploding gradient'], answer:'c',
    source:'Quiz 1 2026' },

  { id:312, type:'mcq', topic:'LSTM', q:'What is the purpose of the forget gate in an LSTM cell?',
    options:['To process inputs','To discard irrelevant information','To activate hidden layers','To store long-term memory'], answer:'b',
    source:'Quiz 1 2026' },

  { id:313, type:'mcq', topic:'RL', q:'Which of the following is a disadvantage of reinforcement learning? (Quiz)',
    options:['It is unsuitable for complex problems','It cannot work with deep learning','It is difficult to debug','It does not require a reward function'], answer:'c',
    source:'Quiz 1 2025' },

  { id:314, type:'mcq', topic:'CNN', q:'CNNs pass the input through a series of …………… layers',
    options:['convolutional','Pooling','Fully connected','all of them'], answer:'d',
    source:'Midterm 2024' },

  { id:315, type:'mcq', topic:'CNN', q:'Which type of layer connects every neuron in one layer to every neuron in another layer?',
    options:['convolutional','Pooling','Fully connected','all of them'], answer:'c',
    source:'Midterm 2024' },

  { id:316, type:'mcq', topic:'CNN', q:'vggNet is an example of CNN …………… model',
    options:['parallel','sequential','residual','classic'], answer:'b',
    source:'Quiz 2024' },

  { id:317, type:'mcq', topic:'DL', q:'Which of the following is the correct statement?',
    options:['Machine learning is a subset of AI','AI is a subset of computer science','Reinforcement learning is an area of machine learning','All of them'], answer:'d',
    source:'Midterm 2024' },

  { id:318, type:'tf', topic:'RL', q:'Reinforcement learning is typically the best choice for solving very simple problems.',
    answer:'False', correction:'RL is NOT preferable for simple problems; it is suited for complex sequential decision-making.' },

  { id:319, type:'tf', topic:'RL', q:'Reinforcement learning requires minimal computational power and data to operate effectively.',
    answer:'False', correction:'RL requires a lot of data and computational power.' },

  { id:320, type:'tf', topic:'RL', q:'Reinforcement learning is the preferred approach for solving simple problems with straightforward solutions.',
    answer:'False', correction:'RL is better suited for complex decision-making problems.' },

  { id:321, type:'tf', topic:'CNN', q:'The ResNet-101 is an example of CNN inception models.',
    answer:'False', correction:'ResNet-101 is a RESIDUAL model, not inception. GoogleNet is the inception model.' },

];

// ══════════════════════════════════════════
// 2. APP STATE
// ══════════════════════════════════════════

let state = {
  currentPage: 'home',
  bankAnswersVisible: false,
  mcqAnswersVisible: false,
  tfAnswersVisible: false,

  // Quiz
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswers: [], // {id, correct, selected}

  // Flashcards
  flashDeck: [],
  flashIndex: 0,
  flashFlipped: false,
  flashTopicFilter: 'all',

  // Storage keys
  FAV_KEY: 'ai_hub_favorites',
  BOOK_KEY: 'ai_hub_bookmarks',
  STUDIED_KEY: 'ai_hub_studied',
  QUIZ_HIST_KEY: 'ai_hub_quiz_history',
};

function getFavorites()  { return JSON.parse(localStorage.getItem(state.FAV_KEY)  || '[]'); }
function getBookmarks()  { return JSON.parse(localStorage.getItem(state.BOOK_KEY) || '[]'); }
function getStudied()    { return JSON.parse(localStorage.getItem(state.STUDIED_KEY) || '[]'); }
function getQuizHistory(){ return JSON.parse(localStorage.getItem(state.QUIZ_HIST_KEY) || '[]'); }

function saveFavorites(arr)  { localStorage.setItem(state.FAV_KEY,  JSON.stringify(arr)); }
function saveBookmarks(arr)  { localStorage.setItem(state.BOOK_KEY, JSON.stringify(arr)); }
function saveStudied(arr)    { localStorage.setItem(state.STUDIED_KEY, JSON.stringify(arr)); }
function saveQuizHistory(arr){ localStorage.setItem(state.QUIZ_HIST_KEY, JSON.stringify(arr)); }

function toggleFavorite(id) {
  let favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx === -1) { favs.push(id); showToast('Added to favorites ★', 'success'); }
  else            { favs.splice(idx,1); showToast('Removed from favorites'); }
  saveFavorites(favs);
  updateDashboard();
  return favs.includes(id);
}

function toggleBookmark(id) {
  let books = getBookmarks();
  const idx = books.indexOf(id);
  if (idx === -1) { books.push(id); showToast('Bookmarked ⚑', 'success'); }
  else            { books.splice(idx,1); showToast('Bookmark removed'); }
  saveBookmarks(books);
  updateDashboard();
  return books.includes(id);
}

function markStudied(id) {
  let studied = getStudied();
  if (!studied.includes(id)) { studied.push(id); saveStudied(studied); }
  updateDashboard();
}

// ══════════════════════════════════════════
// 3. NAVIGATION
// ══════════════════════════════════════════

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');

  const navEl = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navEl) navEl.classList.add('active');

  state.currentPage = page;
  closeSidebar();

  // Lazy render
  if (page === 'bank')       renderBank();
  if (page === 'mcq')        renderMCQ();
  if (page === 'tf')         renderTF();
  if (page === 'flashcards') renderFlashcards();
  if (page === 'favorites')  renderFavorites();
  if (page === 'stats')      renderStats();
  if (page === 'home')       updateDashboard();
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(item.dataset.page);
  });
});

// ══════════════════════════════════════════
// 4. SIDEBAR (mobile)
// ══════════════════════════════════════════

const sidebar  = document.getElementById('sidebar');
const overlay  = document.getElementById('overlay');
const hamburger= document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('hidden');
});

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.add('hidden');
}

// ══════════════════════════════════════════
// 5. THEME TOGGLE
// ══════════════════════════════════════════

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeIcon').textContent = isDark ? '☽' : '☀';
  document.getElementById('themeToggleMobile').textContent = isDark ? '☽' : '☀';
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('themeToggleMobile').addEventListener('click', toggleTheme);

// ══════════════════════════════════════════
// 6. HELPERS
// ══════════════════════════════════════════

function getAnswerText(q) {
  if (q.type === 'tf') {
    return q.answer + (q.correction ? ' — ' + q.correction : '');
  }
  const letterMap = {a:0, b:1, c:2, d:3};
  const idx = letterMap[q.answer];
  return `(${q.answer.toUpperCase()}) ${q.options[idx]}`;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getTopicLabel(key) { return TOPICS[key] || key; }

function getTopics() {
  return [...new Set(ALL_QUESTIONS.map(q => q.topic))];
}

function populateTopicFilters() {
  const topics = getTopics();
  const selectors = ['#topicFilter','#mcqTopicFilter','#flashTopic','#quizTopic'];
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (!el) return;
    // Remove old options except "All"
    while (el.options.length > 1) el.remove(1);
    topics.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = getTopicLabel(t);
      el.appendChild(opt);
    });
  });
}

// ══════════════════════════════════════════
// 7. QUESTION CARD BUILDER
// ══════════════════════════════════════════

function buildCard(q, index, opts = {}) {
  /* opts: { showAnswer, interactive, quizMode } */
  const favs  = getFavorites();
  const books = getBookmarks();
  const isFav  = favs.includes(q.id);
  const isBook = books.includes(q.id);

  const card = document.createElement('div');
  card.className = 'question-card';
  card.dataset.id = q.id;

  // Header row
  const header = document.createElement('div');
  header.className = 'card-header';
  header.innerHTML = `
    <span class="q-number">#${index}</span>
    <span class="q-type-badge badge-${q.type}">${q.type === 'mcq' ? 'MCQ' : 'T/F'}</span>
    <span class="q-topic-badge">${getTopicLabel(q.topic)}</span>
  `;
  card.appendChild(header);

  // Action buttons (not in quiz mode)
  if (!opts.quizMode) {
    const actions = document.createElement('div');
    actions.className = 'card-actions';
    actions.innerHTML = `
      <button class="card-btn fav-btn ${isFav ? 'active' : ''}" title="Favorite" onclick="handleFav(${q.id}, this)">★</button>
      <button class="card-btn bookmark ${isBook ? 'active' : ''}" title="Bookmark" onclick="handleBook(${q.id}, this)">⚑</button>
    `;
    card.appendChild(actions);
  }

  // Question text
  const qText = document.createElement('div');
  qText.className = 'q-text';
  qText.textContent = q.q;
  card.appendChild(qText);

  // Options or T/F buttons
  if (q.type === 'mcq') {
    const optList = document.createElement('div');
    optList.className = 'options-list';
    const letterMap = {a:0, b:1, c:2, d:3};
    q.options.forEach((opt, i) => {
      const letter = Object.keys(letterMap)[i];
      const optEl = document.createElement('div');
      optEl.className = 'option';
      if (opts.showAnswer && letter === q.answer) optEl.classList.add('correct');
      optEl.innerHTML = `<span class="option-letter">${letter.toUpperCase()}.</span><span>${opt}</span>`;
      if (opts.interactive) {
        optEl.addEventListener('click', () => {
          // Mark studied
          markStudied(q.id);
          // Clear previous
          optList.querySelectorAll('.option').forEach(o => o.classList.remove('selected','correct','wrong'));
          if (letter === q.answer) {
            optEl.classList.add('correct');
            showToast('Correct! ✓', 'success');
          } else {
            optEl.classList.add('wrong');
            // Show correct
            optList.querySelectorAll('.option')[letterMap[q.answer]].classList.add('correct');
            showToast('Incorrect ✗', 'error');
          }
          // Reveal answer box
          const rev = card.querySelector('.answer-reveal');
          if (rev) rev.classList.add('visible');
        });
      }
      optList.appendChild(optEl);
    });
    card.appendChild(optList);
  } else {
    // T/F
    const tfBtns = document.createElement('div');
    tfBtns.className = 'tf-buttons';
    ['True','False'].forEach(val => {
      const btn = document.createElement('button');
      btn.className = 'tf-btn';
      btn.textContent = val;
      if (opts.showAnswer && val === q.answer) btn.classList.add('correct');
      if (opts.interactive) {
        btn.addEventListener('click', () => {
          markStudied(q.id);
          tfBtns.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected','correct','wrong'));
          if (val === q.answer) {
            btn.classList.add('correct');
            showToast('Correct! ✓', 'success');
          } else {
            btn.classList.add('wrong');
            tfBtns.querySelectorAll('.tf-btn').forEach(b => {
              if (b.textContent === q.answer) b.classList.add('correct');
            });
            showToast('Incorrect ✗', 'error');
          }
          const rev = card.querySelector('.answer-reveal');
          if (rev) rev.classList.add('visible');
        });
      }
      tfBtns.appendChild(btn);
    });
    card.appendChild(tfBtns);
  }

  // Answer reveal box
  const rev = document.createElement('div');
  rev.className = 'answer-reveal' + (opts.showAnswer ? ' visible' : '');
  rev.textContent = '✓ Answer: ' + getAnswerText(q);
  card.appendChild(rev);

  // Toggle answer button (bank mode)
  if (!opts.interactive && !opts.quizMode) {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'btn-outline';
    toggleBtn.style.cssText = 'margin-top:10px;font-size:0.75rem;padding:6px 12px';
    toggleBtn.textContent = opts.showAnswer ? '🙈 Hide Answer' : '👁 Show Answer';
    toggleBtn.addEventListener('click', () => {
      rev.classList.toggle('visible');
      toggleBtn.textContent = rev.classList.contains('visible') ? '🙈 Hide Answer' : '👁 Show Answer';
    });
    card.appendChild(toggleBtn);
  }

  return card;
}

function handleFav(id, btn) {
  const isNow = toggleFavorite(id);
  btn.classList.toggle('active', isNow);
  if (state.currentPage === 'favorites') renderFavorites();
}

function handleBook(id, btn) {
  const isNow = toggleBookmark(id);
  btn.classList.toggle('active', isNow);
  if (state.currentPage === 'favorites') renderFavorites();
}

// ══════════════════════════════════════════
// 8. DASHBOARD
// ══════════════════════════════════════════

function updateDashboard() {
  const total   = ALL_QUESTIONS.length;
  const studied = getStudied().length;
  const favs    = getFavorites().length;
  const books   = getBookmarks().length;

  document.getElementById('totalQ').textContent  = total;
  document.getElementById('studiedQ').textContent = studied;
  document.getElementById('favQ').textContent     = favs;
  document.getElementById('bookmarkQ').textContent= books;
  document.getElementById('bankCount').textContent = total;

  const pct = Math.round((studied / total) * 100);
  document.getElementById('progressPct').textContent = pct + '%';
  document.getElementById('progressFill').style.width = pct + '%';

  // Topic cards
  const topics = getTopics();
  const tc = document.getElementById('topicCards');
  tc.innerHTML = '';
  topics.forEach(t => {
    const qs = ALL_QUESTIONS.filter(q => q.topic === t);
    const div = document.createElement('div');
    div.className = 'topic-card';
    div.innerHTML = `<div class="topic-name">${getTopicLabel(t)}</div><div class="topic-count">${qs.length} questions</div>`;
    div.addEventListener('click', () => {
      navigateTo('bank');
      setTimeout(() => {
        document.getElementById('topicFilter').value = t;
        filterBank();
      }, 50);
    });
    tc.appendChild(div);
  });
}

// ══════════════════════════════════════════
// 9. QUESTION BANK
// ══════════════════════════════════════════

let bankList = [...ALL_QUESTIONS];

function renderBank(questions = null) {
  const list = document.getElementById('bankList');
  list.innerHTML = '';
  const qs = questions || bankList;
  if (qs.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">◎</div><div>No questions match your filter</div></div>';
    return;
  }
  qs.forEach((q, i) => {
    list.appendChild(buildCard(q, i + 1, { interactive: true }));
  });
}

function filterBank() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const topic  = document.getElementById('topicFilter').value;
  const type   = document.getElementById('typeFilter').value;

  bankList = ALL_QUESTIONS.filter(q => {
    const matchSearch = !search || q.q.toLowerCase().includes(search) ||
      (q.options && q.options.some(o => o.toLowerCase().includes(search)));
    const matchTopic = topic === 'all' || q.topic === topic;
    const matchType  = type  === 'all' || q.type  === type;
    return matchSearch && matchTopic && matchType;
  });

  renderBank();
}

function toggleAllAnswers() {
  state.bankAnswersVisible = !state.bankAnswersVisible;
  document.querySelectorAll('#bankList .answer-reveal').forEach(el => {
    el.classList.toggle('visible', state.bankAnswersVisible);
  });
}

document.getElementById('searchInput').addEventListener('input', filterBank);
document.getElementById('topicFilter').addEventListener('change', filterBank);
document.getElementById('typeFilter').addEventListener('change', filterBank);

// ══════════════════════════════════════════
// 10. MCQ PAGE
// ══════════════════════════════════════════

let mcqList = ALL_QUESTIONS.filter(q => q.type === 'mcq');

function renderMCQ(questions = null) {
  const list = document.getElementById('mcqList');
  list.innerHTML = '';
  const qs = questions || mcqList;
  qs.forEach((q, i) => list.appendChild(buildCard(q, i + 1, { interactive: true })));
}

function shuffleMcq() {
  mcqList = shuffle(mcqList);
  renderMCQ();
}

document.getElementById('mcqTopicFilter').addEventListener('change', function() {
  const t = this.value;
  mcqList = ALL_QUESTIONS.filter(q => q.type === 'mcq' && (t === 'all' || q.topic === t));
  renderMCQ();
});

// ══════════════════════════════════════════
// 11. TRUE/FALSE PAGE
// ══════════════════════════════════════════

function renderTF() {
  const list = document.getElementById('tfList');
  list.innerHTML = '';
  const qs = ALL_QUESTIONS.filter(q => q.type === 'tf');
  qs.forEach((q, i) => list.appendChild(buildCard(q, i + 1, { interactive: true })));
}

// ══════════════════════════════════════════
// 12. QUIZ MODE
// ══════════════════════════════════════════

function startQuiz() {
  const countVal = document.getElementById('quizCount').value;
  const typeVal  = document.getElementById('quizType').value;
  const topicVal = document.getElementById('quizTopic').value;

  let pool = ALL_QUESTIONS.filter(q => {
    const matchType  = typeVal  === 'all' || q.type  === typeVal;
    const matchTopic = topicVal === 'all' || q.topic === topicVal;
    return matchType && matchTopic;
  });

  pool = shuffle(pool);
  const count = countVal === 'all' ? pool.length : Math.min(parseInt(countVal), pool.length);
  state.quizQuestions = pool.slice(0, count);
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswers = [];

  document.getElementById('quizSetup').classList.add('hidden');
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizProgress').classList.remove('hidden');

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q   = state.quizQuestions[state.quizIndex];
  const idx = state.quizIndex;
  const total = state.quizQuestions.length;

  document.getElementById('quizQNum').textContent   = `Q ${idx + 1} / ${total}`;
  document.getElementById('quizScore').textContent  = `Score: ${state.quizScore}`;
  document.getElementById('quizBarFill').style.width = ((idx / total) * 100) + '%';

  const nextBtn = document.getElementById('quizNextBtn');
  nextBtn.disabled = true;

  const container = document.getElementById('quizQuestion');
  container.innerHTML = '';

  const qText = document.createElement('div');
  qText.className = 'q-text';
  qText.style.marginBottom = '16px';
  qText.textContent = `Q${idx + 1}. ${q.q}`;
  container.appendChild(qText);

  let answered = false;

  if (q.type === 'mcq') {
    const optList = document.createElement('div');
    optList.className = 'options-list';
    const letterMap = {a:0, b:1, c:2, d:3};
    q.options.forEach((opt, i) => {
      const letter = ['a','b','c','d'][i];
      const optEl = document.createElement('div');
      optEl.className = 'option';
      optEl.innerHTML = `<span class="option-letter">${letter.toUpperCase()}.</span><span>${opt}</span>`;
      optEl.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        nextBtn.disabled = false;
        const correct = letter === q.answer;
        optList.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
        optEl.classList.add(correct ? 'correct' : 'wrong');
        if (!correct) optList.querySelectorAll('.option')[letterMap[q.answer]].classList.add('correct');
        if (correct) state.quizScore++;
        state.quizAnswers.push({ id: q.id, q: q.q, correct, selected: opt, correctAnswer: getAnswerText(q) });
      });
      optList.appendChild(optEl);
    });
    container.appendChild(optList);
  } else {
    const tfBtns = document.createElement('div');
    tfBtns.className = 'tf-buttons';
    ['True','False'].forEach(val => {
      const btn = document.createElement('button');
      btn.className = 'tf-btn';
      btn.textContent = val;
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        nextBtn.disabled = false;
        const correct = val === q.answer;
        tfBtns.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected','correct','wrong'));
        btn.classList.add(correct ? 'correct' : 'wrong');
        if (!correct) tfBtns.querySelectorAll('.tf-btn').forEach(b => {
          if (b.textContent === q.answer) b.classList.add('correct');
        });
        if (correct) state.quizScore++;
        state.quizAnswers.push({ id: q.id, q: q.q, correct, selected: val, correctAnswer: getAnswerText(q) });
      });
      tfBtns.appendChild(btn);
    });
    container.appendChild(tfBtns);
  }
}

function nextQuizQ() {
  state.quizIndex++;
  if (state.quizIndex >= state.quizQuestions.length) {
    showQuizResults();
  } else {
    renderQuizQuestion();
  }
}

function skipQuizQ() {
  const q = state.quizQuestions[state.quizIndex];
  state.quizAnswers.push({ id: q.id, q: q.q, correct: false, selected: 'Skipped', correctAnswer: getAnswerText(q) });
  state.quizIndex++;
  if (state.quizIndex >= state.quizQuestions.length) {
    showQuizResults();
  } else {
    document.getElementById('quizNextBtn').disabled = false;
    renderQuizQuestion();
  }
}

function showQuizResults() {
  document.getElementById('quizProgress').classList.add('hidden');
  const res = document.getElementById('quizResults');
  res.classList.remove('hidden');

  const total  = state.quizQuestions.length;
  const score  = state.quizScore;
  const pct    = Math.round((score / total) * 100);

  let grade = 'F';
  if (pct >= 90) grade = 'A+';
  else if (pct >= 80) grade = 'A';
  else if (pct >= 70) grade = 'B';
  else if (pct >= 60) grade = 'C';
  else if (pct >= 50) grade = 'D';

  let msg = pct >= 80 ? '🎉 Excellent work!' : pct >= 60 ? '📚 Keep studying!' : '💪 More practice needed!';

  let breakdownHtml = state.quizAnswers.map(a =>
    `<div class="result-item ${a.correct ? 'right' : 'wrong'}">
      <span>${a.q.substring(0,60)}${a.q.length > 60 ? '…' : ''}</span>
      <span>${a.correct ? '✓' : '✗'} ${a.correct ? '' : a.correctAnswer}</span>
    </div>`
  ).join('');

  res.innerHTML = `
    <div class="result-score">${pct}%</div>
    <div class="result-grade" style="color:${pct>=70 ? 'var(--green)' : pct>=50 ? 'var(--yellow)' : 'var(--red)'}">${grade}</div>
    <div class="result-msg">${score} / ${total} correct · ${msg}</div>
    <div class="result-breakdown">${breakdownHtml}</div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn-primary" onclick="restartQuiz()">↺ Try Again</button>
      <button class="btn-outline" onclick="newQuiz()">+ New Quiz</button>
    </div>
  `;

  // Save history
  const history = getQuizHistory();
  history.unshift({ date: new Date().toLocaleDateString(), score, total, pct, grade });
  if (history.length > 20) history.pop();
  saveQuizHistory(history);
}

function restartQuiz() {
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswers = [];
  state.quizQuestions = shuffle(state.quizQuestions);
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizProgress').classList.remove('hidden');
  renderQuizQuestion();
}

function newQuiz() {
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizSetup').classList.remove('hidden');
}

// ══════════════════════════════════════════
// 13. FLASHCARDS
// ══════════════════════════════════════════

function buildFlashDeck(topicFilter = 'all') {
  let deck = ALL_QUESTIONS.filter(q => topicFilter === 'all' || q.topic === topicFilter);
  state.flashDeck = shuffle(deck);
  state.flashIndex = 0;
  state.flashFlipped = false;
}

function renderFlashcards() {
  buildFlashDeck(state.flashTopicFilter);
  renderCurrentFlash();
}

function renderCurrentFlash() {
  const deck = state.flashDeck;
  const idx  = state.flashIndex;
  if (deck.length === 0) return;

  const q = deck[idx];
  document.getElementById('flashCounter').textContent = `${idx + 1} / ${deck.length}`;

  const fc = document.getElementById('flashcard');
  fc.classList.remove('flipped');
  state.flashFlipped = false;

  document.getElementById('flashFront').textContent = q.q;
  document.getElementById('flashBack').textContent  = '✓ ' + getAnswerText(q);
}

function flipFlash() {
  const fc = document.getElementById('flashcard');
  state.flashFlipped = !state.flashFlipped;
  fc.classList.toggle('flipped', state.flashFlipped);
  if (state.flashFlipped) markStudied(state.flashDeck[state.flashIndex].id);
}

function nextFlash() {
  if (state.flashIndex < state.flashDeck.length - 1) {
    state.flashIndex++;
    renderCurrentFlash();
  } else {
    showToast('🎉 End of deck!', 'success');
  }
}

function prevFlash() {
  if (state.flashIndex > 0) {
    state.flashIndex--;
    renderCurrentFlash();
  }
}

function shuffleFlash() {
  buildFlashDeck(state.flashTopicFilter);
  renderCurrentFlash();
  showToast('Deck shuffled ⟳');
}

document.getElementById('flashTopic').addEventListener('change', function() {
  state.flashTopicFilter = this.value;
  buildFlashDeck(this.value);
  renderCurrentFlash();
});

// ══════════════════════════════════════════
// 14. FAVORITES & BOOKMARKS
// ══════════════════════════════════════════

function renderFavorites() {
  const favIds  = getFavorites();
  const bookIds = getBookmarks();

  const favList  = document.getElementById('favList');
  const bookList = document.getElementById('bookList');

  favList.innerHTML = '';
  bookList.innerHTML = '';

  const favQs  = ALL_QUESTIONS.filter(q => favIds.includes(q.id));
  const bookQs = ALL_QUESTIONS.filter(q => bookIds.includes(q.id));

  if (favQs.length === 0) {
    favList.innerHTML = '<div class="empty-state"><div class="empty-state-icon">★</div><div>No favorites yet. Click ★ on any question to save it.</div></div>';
  } else {
    favQs.forEach((q, i) => favList.appendChild(buildCard(q, i + 1, { interactive: true })));
  }

  if (bookQs.length === 0) {
    bookList.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⚑</div><div>No bookmarks yet. Click ⚑ to mark difficult questions.</div></div>';
  } else {
    bookQs.forEach((q, i) => bookList.appendChild(buildCard(q, i + 1, { interactive: true })));
  }
}

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    document.getElementById(this.dataset.tab).classList.add('active');
  });
});

// ══════════════════════════════════════════
// 15. STATISTICS
// ══════════════════════════════════════════

function renderStats() {
  const studied  = getStudied().length;
  const total    = ALL_QUESTIONS.length;
  const favs     = getFavorites().length;
  const books    = getBookmarks().length;
  const history  = getQuizHistory();
  const avgScore = history.length
    ? Math.round(history.reduce((a, b) => a + b.pct, 0) / history.length)
    : 0;

  // Detailed stats cards
  const detailedStats = document.getElementById('detailedStats');
  detailedStats.innerHTML = '';
  const cards = [
    { label: 'Questions Studied', value: studied, color: 'green' },
    { label: 'Total Questions',   value: total,   color: 'cyan' },
    { label: 'Quizzes Taken',     value: history.length, color: 'yellow' },
    { label: 'Avg Quiz Score',    value: avgScore + '%', color: 'red' },
  ];
  cards.forEach(c => {
    const el = document.createElement('div');
    el.className = 'stat-card'; el.dataset.color = c.color;
    el.innerHTML = `<span class="stat-number">${c.value}</span><span class="stat-label">${c.label}</span>`;
    detailedStats.appendChild(el);
  });

  // Topic breakdown
  const topicStats = document.getElementById('topicStats');
  topicStats.innerHTML = '';
  const topics = getTopics();
  const studiedIds = getStudied();
  topics.forEach(t => {
    const qs  = ALL_QUESTIONS.filter(q => q.topic === t);
    const done = qs.filter(q => studiedIds.includes(q.id)).length;
    const pct  = qs.length ? Math.round((done / qs.length) * 100) : 0;
    const row = document.createElement('div');
    row.className = 'topic-stat-row';
    row.innerHTML = `
      <span class="topic-stat-name">${getTopicLabel(t)}</span>
      <span class="topic-stat-count">${done} / ${qs.length}</span>
      <div class="topic-stat-bar-wrap"><div class="topic-stat-bar" style="width:${pct}%"></div></div>
    `;
    topicStats.appendChild(row);
  });

  // Quiz history
  const histEl = document.getElementById('quizHistory');
  histEl.innerHTML = '';
  if (history.length === 0) {
    histEl.innerHTML = '<div class="empty-state"><div class="empty-state-icon">▦</div><div>No quizzes taken yet.</div></div>';
  } else {
    history.forEach(h => {
      const item = document.createElement('div');
      item.className = 'history-item';
      item.innerHTML = `<span>${h.date}</span><span>${h.score}/${h.total} correct</span><span class="history-score">${h.pct}% (${h.grade})</span>`;
      histEl.appendChild(item);
    });
  }
}

function clearStats() {
  if (confirm('Reset all progress, favorites and quiz history?')) {
    localStorage.removeItem(state.FAV_KEY);
    localStorage.removeItem(state.BOOK_KEY);
    localStorage.removeItem(state.STUDIED_KEY);
    localStorage.removeItem(state.QUIZ_HIST_KEY);
    updateDashboard();
    renderStats();
    showToast('Statistics reset ✓', 'success');
  }
}

// ══════════════════════════════════════════
// 16. RANDOM QUESTION
// ══════════════════════════════════════════

function showRandomQuestion() {
  const q = ALL_QUESTIONS[Math.floor(Math.random() * ALL_QUESTIONS.length)];
  const content = document.getElementById('randomContent');
  content.innerHTML = '';
  content.appendChild(buildCard(q, '?', { interactive: true }));
  document.getElementById('randomModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('randomModal').classList.add('hidden');
}

// Close on backdrop click
document.getElementById('randomModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ══════════════════════════════════════════
// 17. TOAST NOTIFICATIONS
// ══════════════════════════════════════════

let toastTimeout;
function showToast(msg, type = '') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast' + (type ? ' ' + type : '');
  toast.textContent = msg;
  document.body.appendChild(toast);

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.remove(), 2200);
}

// ══════════════════════════════════════════
// 18. INIT
// ══════════════════════════════════════════

function init() {
  populateTopicFilters();
  updateDashboard();
  // Start on home
  navigateTo('home');
}

init();
