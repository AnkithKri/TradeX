import time
import requests
import pandas as pd
from yahoo_fin import stock_info
from bs4 import BeautifulSoup
from textblob import TextBlob

# Define stock symbols to track
stock_symbols = ["AAPL", "TSLA", "GOOGL", "MSFT", "AMZN"]

# Function to fetch stock trends (price, % change)
def get_stock_trend(symbol):
    try:
        quote = stock_info.get_quote_table(symbol, dict_result=True)
        current_price = quote["Previous Close"]
        change_percent = quote["Quote Price"] / quote["Previous Close"] - 1
        return {"Symbol": symbol, "Price": current_price, "Change %": round(change_percent * 100, 2)}
    except Exception as e:
        print(f"Error fetching trend for {symbol}: {e}")
        return None

# Function to fetch latest news and analyze sentiment
def get_stock_news(symbol):
    url = f"https://finance.yahoo.com/quote/{symbol}/news?p={symbol}"
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"Failed to fetch news for {symbol}")
        return []

    soup = BeautifulSoup(response.text, "html.parser")
    articles = soup.find_all("li", class_="js-stream-content")

    news_data = []
    for article in articles[:5]:  # Fetch top 5 news articles
        try:
            title_tag = article.find("h3")
            if title_tag:
                title = title_tag.text.strip()
                link = "https://finance.yahoo.com" + title_tag.a["href"]
                
                # Sentiment Analysis
                sentiment = TextBlob(title).sentiment.polarity
                sentiment_label = "Positive" if sentiment > 0 else "Negative" if sentiment < 0 else "Neutral"

                news_data.append({"Title": title, "Link": link, "Sentiment": sentiment_label})
        except Exception as e:
            print(f"Error parsing news article: {e}")

    return news_data

# Fetch stock trends
stock_trends = [get_stock_trend(symbol) for symbol in stock_symbols]
df_trends = pd.DataFrame([t for t in stock_trends if t])  # Convert to DataFrame

# Fetch news and sentiment
stock_news = {symbol: get_stock_news(symbol) for symbol in stock_symbols}

# Display results
print("\nStock Trends:")
print(df_trends)

print("\nStock News & Sentiment:")
for symbol, news_list in stock_news.items():
    print(f"\n{symbol}:")
    for news in news_list:
        print(f"- {news['Title']} ({news['Sentiment']})\n  {news['Link']}")

