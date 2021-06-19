import riak

riak_client = riak.RiakClient(pb_port=8087)
guitar_bucket = riak_client.bucket('s22952')


guitar = {
  'model': "Ibanez RGR",
  'price': 2499.99,
  'prod_year': 2020
}

print("Creating new object...")
new_guitar = guitar_bucket.new(guitar['model'], data=guitar)
new_guitar.store()

print()
print("Fetching new object...")
fetched_guitar = guitar_bucket.get(guitar['model'])

print(fetched_guitar.encoded_data)

print()
print("Updateing new object:")
fetched_guitar.data = {
  'model': "Ibanez RGR",
  'price': 2499.99,
  'prod_year': 2021
}
fetched_guitar.store()

print()
print("After update:")
fetched_guitar_once_more = guitar_bucket.get(guitar['model'])
print(fetched_guitar_once_more.encoded_data)

print()
print("Deleting new object:")
fetched_guitar_once_more.delete()

print("After delete:")
deleted_fetched_guitar = guitar_bucket.get(guitar['model'])
print(deleted_fetched_guitar.encoded_data)